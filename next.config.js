/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGOURI: process.env.MONGOURI,
    JWT_SECRET: process.env.JWT_SECRET,
    HOST: process.env.HOST,
    MKEY: process.env.MKEY,
    MID: process.env.MID,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    WEBSITE_NAME: process.env.WEBSITE_NAME,
    WEBSITE: process.env.WEBSITE,
    WEBSITE_EMAIL: process.env.WEBSITE_EMAIL,
  }
}

module.exports = nextConfig
