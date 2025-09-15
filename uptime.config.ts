const pageConfig = {
  // Title for your status page
  title: "稀奇's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: '', label: '博客', highlight: true },
    { link: '', label: 'Blog'},
    { link: '', label: 'YouTube' },
    { link: '', label: 'GitHub' }, 
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example TCP Monitor
    {
      id: 'mootv',
      name: 'huggingface-Mootv',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'GET',
      // `target` should be `host:port` for tcp monitors
      target: 'https://aifadain-moontv.hf.space',
      tooltip: '影视库',
      statusPageLink: 'https://aifadain-moontv.hf.space',
      timeout: 10000,
    },
{
  id: 'my-dl', 
  name: '代理', 
  method: 'GET',
  target: 'https://aifadain-dltts.hf.space', 
  tooltip: '代理服务可用性监控',
  statusPageLink: 'https://aifadain-dltts.hf.space',
  timeout: 10000, 
}
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
