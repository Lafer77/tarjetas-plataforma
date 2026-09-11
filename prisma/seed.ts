import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.cardDesign.createMany({
    data: [
      { name: "Feliz Cumpleaños Confeti", category: "birthday", price: 5, videoUrl: "" },
      { name: "Nuestra Boda", category: "wedding", price: 8, videoUrl: "" },
      { name: "Te Amo Hoy y Siempre", category: "romantic", price: 4, videoUrl: "" },
    ],
  });
  console.log("Datos de prueba insertados");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });