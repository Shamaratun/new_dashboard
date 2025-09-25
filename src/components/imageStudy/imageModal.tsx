"use client";

import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

export default function ImageModalPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1); // ✅ zoom factor
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

 
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      setTimeout(() => closeRef.current?.focus(), 0);
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
      };
    } else {
      triggerRef.current?.focus();
      setZoom(1); 
    }
  }, [isOpen]);

 
  function Modal({ children }: { children: React.ReactNode }) {
    if (typeof document === "undefined") return null;
    return ReactDOM.createPortal(children, document.body);
  }

  // zoom handler
  function handleWheel(e: React.WheelEvent) {
    e.preventDefault();
    setZoom((prev) => {
      const newZoom = prev + (e.deltaY < 0 ? 0.1 : -0.1);
      return Math.min(Math.max(newZoom, 0.5), 3); 
    });
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(true)}
        className="inline-block"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <Image
          src="/images/IceFlower.jpg" 
          alt="Sample image showing IceQueen"
          width={300}
          height={200}
          className="cursor-pointer rounded-lg shadow"
        />
      </button>

      {isOpen && (
        <Modal>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={() => setIsOpen(false)}
            onWheel={handleWheel} // 
          >
            <div
              className="relative max-w-5xl w-full bg-transparent flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 id="modal-title" className="sr-only">
                Image preview
              </h2>

              <button
                ref={closeRef}
                onClick={() => setIsOpen(false)}
                aria-label="Close image preview"
                className="absolute top-4 right-6 text-white text-2xl"
              >
                ✖
              </button>

              <div
                className="transition-transform duration-200 ease-in-out"
                style={{
                  transform: `scale(${zoom})`,
                }}
              >
                <Image
                  src="/images/IceFlower.jpg"
                  alt="Larger sample"
                  width={300}
                  height={80}
                  className="rounded-lg max-h-[80vh] w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}