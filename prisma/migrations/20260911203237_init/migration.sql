-- CreateEnum
CREATE TYPE "Category" AS ENUM ('birthday', 'wedding', 'anniversary', 'romantic', 'special-date');

-- CreateTable
CREATE TABLE "CardDesign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CardDesign_pkey" PRIMARY KEY ("id")
);
