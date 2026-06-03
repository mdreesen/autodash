/**
 * AUTODASH DYNAMIC NETWORK ROUTING BRIDGE
 * UTILS/API.TS
 */
export const getApiUrl = (): string => {
    // Safe runtime check to see if we are running inside a browser window
    if (typeof window !== 'undefined') {
      const href = window.location.href || ''
      
      // If we're on a standard web deployment (not a native app wrapper running from local files)
      if (!href.startsWith('file:') && !href.startsWith('localhost:')) {
        // If Capacitor hasn't explicitly attached itself to the window, default to standard relative routing
        if (!(window as any).Capacitor) {
          return ''
        }
      }
    }
  
    /**
     * 🛰️ PHYSICAL DEVICE LOCAL WI-FI TESTING TUNNEL
     * Replace this with your computer's actual local Wi-Fi IP address (e.g., 192.168.1.75).
     * Do not leave it as '192.168.1.XX' or your devices will fail to handshake!
     */
    const HOST_IP = '192.168.1.XX' 
    
    return `http://${HOST_IP}:3000`
  }