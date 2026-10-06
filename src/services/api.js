/**
 * AMP Pedia Agency API Client
 * - Zero external libraries (uses native fetch)
 * - Auto-fallback graceful mode
 * - Connects to Laravel Backend API (amppedia_hub_db)
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

class AgencyApiClient {
  constructor(baseUrl = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async request(endpoint, options = {}) {
    const token = localStorage.getItem('amp_sso_token') || sessionStorage.getItem('amp_sso_token');
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...options.headers,
    };

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP Error ${response.status}`);
      }
      return await response.json();
    } catch (err) {
      console.warn(`[Agency API] Request info (${endpoint}):`, err.message);
      // Returns safe fallback payload
      return { success: false, fallback: true, message: err.message };
    }
  }

  // Save Calculator Estimate Simulation to Backend
  async saveEstimation(estimationData) {
    return this.request('/v1/agency/estimate-save', {
      method: 'POST',
      body: JSON.stringify(estimationData),
    });
  }

  // Submit Contact Form Inquiry
  async submitInquiry(inquiryData) {
    return this.request('/v1/agency/inquiry', {
      method: 'POST',
      body: JSON.stringify(inquiryData),
    });
  }

  // Get dynamic portfolio items
  async getPortfolio() {
    return this.request('/v1/agency/portfolio', {
      method: 'GET',
    });
  }
}

export const agencyApi = new AgencyApiClient();
export default agencyApi;
