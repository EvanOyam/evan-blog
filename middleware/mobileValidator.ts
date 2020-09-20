export default function ({ req, redirect }: any): void {
  const ua = process.server ? req.headers['user-agent'] : navigator.userAgent
  if (ua.match(/(Android)|(iPhone)/)) {
    redirect('/mobile')
  }
}
