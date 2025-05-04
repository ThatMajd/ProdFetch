# ProdFetch

SKUFetch is an Expo-based React Native app that empowers appliance-store sales reps to retrieve product information instantly from their phone. The app uses the device camera to scan UPC/SKU barcodes and calls a FastAPI backend that returns current pricing, specifications, stock levels, and images. Sales staff can also browse or search the entire catalog by name, category, or SKU.

**Key Benefits**
- **Barcode-Driven Lookup**: Scan any appliance’s barcode to auto-populate product details.  
- **Flexible Search**: Full-text and filtered queries across product name, category, and SKU.  
- **Rich Product Profiles**: View specs, photos, pricing, and availability in one screen.  
- **Offline Caching**: Store recent lookups locally for uninterrupted access in low-connectivity areas.  
- **Secure API**: FastAPI delivers data via token-based authentication and asynchronous endpoints.

By combining an Expo-managed mobile UI with a performant backend, SKUFetch streamlines on-the-spot product discovery and keeps sales conversations focused and data-driven.  
