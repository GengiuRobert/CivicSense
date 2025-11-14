# CivicSense

**Bachelor's Thesis Project:** An AI-powered PWA platform designed for geo-targeted civic alerts and announcements.

## 📖 Overview

CivicSense is a full-stack application (built with Angular, NestJS, and PostGIS) aimed at solving the problem of fragmented and inefficient public communication from municipal authorities.

This platform allows city halls to publish official announcements (e.g., water main repairs, cultural events, road closures) and ensures that relevant information reaches the right citizens through geo-targeted PWA push notifications.

### 🎯 Key Objectives

**Centralize Information:** Create a single, official source of truth, moving away from fragmented social media posts and paper flyers.
**Geo-Targeting:** Use PostGIS to deliver notifications only to citizens in affected areas (e.g., a specific neighborhood or street).
**AI-Assistance:** Leverage AI (via a FastAPI microservice) to enhance content by providing summaries, translations, and auto-geotagging.
**Accessibility:** Deliver a modern PWA (Progressive Web App) that is installable, fast, and accessible.