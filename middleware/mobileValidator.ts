export default function ({ req, redirect }: any): void {
  const ua = req.headers['user-agent']
  if (ua.match(/(Android)|(iPhone)/)) {
    redirect('/mobile')
  }
}
