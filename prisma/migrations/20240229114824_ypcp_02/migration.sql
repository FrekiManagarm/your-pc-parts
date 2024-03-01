-- CreateEnum
CREATE TYPE "MemorySupport" AS ENUM ('DDR5', 'DDR4', 'DDR3');

-- CreateEnum
CREATE TYPE "CPUType" AS ENUM ('AMD', 'Intel');

-- AlterTable
ALTER TABLE "CPU" ADD COLUMN     "cache" INTEGER DEFAULT 0,
ADD COLUMN     "cpu_type" "CPUType",
ADD COLUMN     "socket" TEXT DEFAULT '';

-- AlterTable
ALTER TABLE "CPUCooler" ADD COLUMN     "led" BOOLEAN DEFAULT false,
ADD COLUMN     "pressure" TEXT DEFAULT '',
ADD COLUMN     "proc_support" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "rpm_max" INTEGER DEFAULT 0,
ADD COLUMN     "rpm_min" INTEGER DEFAULT 0,
ADD COLUMN     "tdp_max" INTEGER DEFAULT 0,
ADD COLUMN     "type" TEXT DEFAULT '';

-- AlterTable
ALTER TABLE "GPU" ADD COLUMN     "brand" TEXT DEFAULT '',
ADD COLUMN     "led" BOOLEAN DEFAULT false,
ADD COLUMN     "power" INTEGER DEFAULT 0,
ADD COLUMN     "proc_unit" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "HDD" ADD COLUMN     "rpm" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "Motherboard" ADD COLUMN     "audio" BOOLEAN DEFAULT true,
ADD COLUMN     "bluetooth" BOOLEAN DEFAULT false,
ADD COLUMN     "chipset" TEXT DEFAULT '',
ADD COLUMN     "support" "MemorySupport" DEFAULT 'DDR4',
ADD COLUMN     "wifi" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "SSD" ADD COLUMN     "read_speed" INTEGER DEFAULT 0,
ADD COLUMN     "write_speed" INTEGER DEFAULT 0;
