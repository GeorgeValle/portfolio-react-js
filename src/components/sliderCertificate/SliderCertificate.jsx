import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import "./SliderCertificate.css";

const SliderCertificate = () => {
  const certificates = [
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636376/portfolio/certificates/coderhouse-frontend_dlmbc2.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636369/portfolio/certificates/coderhouse-desarrollo-web_smuu34.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636370/portfolio/certificates/coderhouse-js_uofsye.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636365/portfolio/certificates/coderhouse-react-js_w3mw1y.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1679457857/portfolio/certificates/certificado-backend-coder_zj0cua.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1679458129/portfolio/certificates/certificado-fullstack-coder_eq2sgl.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636359/portfolio/certificates/udemy-html-css_ipuy0c.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636360/portfolio/certificates/tutellus-js_itjfoa.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636354/portfolio/certificates/udemy-js-beginner_evthj0.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1658636365/portfolio/certificates/udemy-js-es6_lzbqrv.jpg",
    "https://res.cloudinary.com/georgevalle/image/upload/v1751517966/portfolio/certificates/certificado-de-patrones-y-disenios_j31khf.png",
    "https://res.cloudinary.com/georgevalle/image/upload/v1751517991/portfolio/certificates/figma-certificate-img_krmdhm.png",
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  const duplicatedCertificates = useMemo(
    () => [...certificates, ...certificates],
    [certificates]
  );

  const openLightbox = (src, index) => {
    setSelectedCertificate({
      src,
      alt: `Certificate ${index + 1}`,
    });
  };

  const closeLightbox = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <section className="certificate-section">
        <div className="certificate-inner">
          <div className="certificate-header">
            <p className="certificate-kicker">Learning Journey</p>
            <h2 className="certificate-title">Courses & Certifications</h2>
            <p className="certificate-subtitle">
              A visual overview of completed courses and certifications. On
              desktop, hover to pause and click to expand. On mobile, tap any
              certificate to open it.
            </p>
          </div>

          <div
            className={`certificate-marquee ${
              selectedCertificate ? "paused" : ""
            }`}
          >
            <div className="certificate-fade certificate-fade-left" />
            <div className="certificate-fade certificate-fade-right" />

            <div className="certificate-track">
              {duplicatedCertificates.map((image, index) => {
                const originalIndex = index % certificates.length;

                return (
                  <button
                    key={`${originalIndex}-${index}`}
                    type="button"
                    className="certificate-card"
                    onClick={() => openLightbox(image, originalIndex)}
                    aria-label={`Open certificate ${originalIndex + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Certificate ${originalIndex + 1}`}
                      className="certificate-image"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="certificate-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <div
            className="certificate-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="certificate-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close preview"
            >
              <X size={20} />
            </button>

            <img
              src={selectedCertificate.src}
              alt={selectedCertificate.alt}
              className="certificate-lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SliderCertificate;