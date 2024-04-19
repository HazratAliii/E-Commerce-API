/*
  Warnings:

  - You are about to drop the column `role` on the `User_info` table. All the data in the column will be lost.
  - Added the required column `address` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mayment_method` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_status` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payable_amount` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `Ordered_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payable_amount` to the `Ordered_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tax` to the `Ordered_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `User_info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "discount" INTEGER NOT NULL,
ADD COLUMN     "mayment_method" TEXT NOT NULL,
ADD COLUMN     "order_status" TEXT NOT NULL,
ADD COLUMN     "payable_amount" INTEGER NOT NULL,
ADD COLUMN     "tax" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ordered_item" ADD COLUMN     "discount" INTEGER NOT NULL,
ADD COLUMN     "payable_amount" INTEGER NOT NULL,
ADD COLUMN     "tax" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User_info" DROP COLUMN "role",
ADD COLUMN     "role_id" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_id_key" ON "Role"("id");

-- AddForeignKey
ALTER TABLE "User_info" ADD CONSTRAINT "User_info_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
