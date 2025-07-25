import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.gmail && (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.facebook && (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.instagram && (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.twitter && (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.medium && (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-medium"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.stackoverflow && (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.kaggle && (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
          <span></span>
        </a>
      )}

      {/* ✅ WhatsApp */}
      {socialMediaLinks.whatsapp && (
        <a
          href={socialMediaLinks.whatsapp}
          className="icon-button whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
          <span></span>
        </a>
      )}

      {/* ✅ Snapchat */}
      {socialMediaLinks.snapchat && (
        <a
          href={socialMediaLinks.snapchat}
          className="icon-button snapchat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-snapchat-ghost"></i>
          <span></span>
        </a>
      )}

      {/* ✅ Telegram */}
      {socialMediaLinks.telegram && (
        <a
          href={socialMediaLinks.telegram}
          className="icon-button telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-telegram-plane"></i>
          <span></span>
        </a>
      )}
    </div>
  );
}

