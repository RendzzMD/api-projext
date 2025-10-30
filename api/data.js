export default function handler(req, res) {
  res.status(200).json({
    success: true,
    author: "RNMD 😎",
    message: "Halo bro, ini data dari API Vercel!",
    time: new Date().toLocaleString("id-ID")
  });
}
