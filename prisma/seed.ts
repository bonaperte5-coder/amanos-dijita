import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10)

  await prisma.admin.upsert({
    where: { email: 'admin@digiajans.com' },
    update: {},
    create: {
      email: 'admin@digiajans.com',
      password: hashedPassword,
    },
  })

  console.log('Seed completed. Admin: admin@digiajans.com / admin123')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
