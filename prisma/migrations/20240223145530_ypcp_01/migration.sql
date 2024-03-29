-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMINISTRATOR', 'CLIENT', 'MODERATOR');

-- CreateEnum
CREATE TYPE "PSUModul" AS ENUM ('Full', 'Semi', 'none');

-- CreateEnum
CREATE TYPE "PSUEff" AS ENUM ('bronze', 'silver', 'gold', 'platinium', 'titanium');

-- CreateEnum
CREATE TYPE "PSUType" AS ENUM ('ATX', 'mATX', 'SFX');

-- CreateEnum
CREATE TYPE "CaseType" AS ENUM ('EATX', 'ATX', 'mATX', 'mITX');

-- CreateEnum
CREATE TYPE "FocusType" AS ENUM ('Auto', 'Manual', 'Fixed');

-- CreateEnum
CREATE TYPE "MouseOrientation" AS ENUM ('Right', 'Left', 'Both');

-- CreateEnum
CREATE TYPE "MouseTrackMethod" AS ENUM ('Optical', 'Laser');

-- CreateEnum
CREATE TYPE "KeyboardStyle" AS ENUM ('Gaming', 'Mini', 'Office');

-- CreateEnum
CREATE TYPE "ConnectionType" AS ENUM ('Wired', 'Wireless', 'Bluetooth', 'Both');

-- CreateEnum
CREATE TYPE "HeadphoneTypes" AS ENUM ('Circumaural', 'Supra_aural', 'Earbuds', 'Waterproof', 'DJ');

-- CreateEnum
CREATE TYPE "EnclosureType" AS ENUM ('Closed', 'Open');

-- CreateEnum
CREATE TYPE "MonitorPanelType" AS ENUM ('IPS', 'TN', 'VA', 'OLED');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'CLIENT',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "CPUCooler" (
    "id" TEXT NOT NULL,
    "rpm" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "amazonLink" TEXT DEFAULT '',
    "noise_level" INTEGER DEFAULT 0,
    "color" TEXT,
    "size" INTEGER,

    CONSTRAINT "CPUCooler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motherboard" (
    "id" TEXT NOT NULL,
    "socket" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "form_factor" TEXT NOT NULL,
    "max_memory" INTEGER NOT NULL DEFAULT 0,
    "memory_slots" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "amazonLink" TEXT DEFAULT '',
    "color" TEXT,

    CONSTRAINT "Motherboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RAM" (
    "id" TEXT NOT NULL,
    "speed" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],
    "modules" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "price_per_gb" INTEGER NOT NULL DEFAULT 0,
    "color" TEXT,
    "imageUrl" TEXT DEFAULT '',
    "amazonLink" TEXT DEFAULT '',
    "name" TEXT NOT NULL,
    "first_word_latency" TEXT DEFAULT '',
    "cas_latency" TEXT DEFAULT '',

    CONSTRAINT "RAM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CPU" (
    "id" TEXT NOT NULL,
    "core_count" INTEGER NOT NULL DEFAULT 0,
    "threads_count" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "core_clock" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "boost_clock" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "amazonLink" TEXT DEFAULT '',
    "tdp" INTEGER DEFAULT 0,
    "graphics" BOOLEAN DEFAULT false,
    "smt" BOOLEAN DEFAULT false,

    CONSTRAINT "CPU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HDD" (
    "id" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 0,
    "price_per_gb" INTEGER NOT NULL DEFAULT 0,
    "amazonLink" TEXT DEFAULT '',
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "type" TEXT DEFAULT '',
    "cache" INTEGER DEFAULT 0,
    "form_factor" TEXT,
    "interface" TEXT,

    CONSTRAINT "HDD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SSD" (
    "id" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 0,
    "price_per_gb" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "amazonLink" TEXT DEFAULT '',
    "type" TEXT,
    "cache" INTEGER DEFAULT 0,
    "form_factor" TEXT,
    "interface" TEXT,

    CONSTRAINT "SSD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GPU" (
    "id" TEXT NOT NULL,
    "chipset" TEXT DEFAULT '',
    "memory" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "amazonLink" TEXT DEFAULT '',
    "core_clock" INTEGER DEFAULT 0,
    "boost_clock" INTEGER DEFAULT 0,
    "color" TEXT DEFAULT '',
    "length" INTEGER DEFAULT 0,

    CONSTRAINT "GPU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" TEXT NOT NULL,
    "type" "CaseType" NOT NULL DEFAULT 'ATX',
    "color" TEXT DEFAULT '',
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "included_PSU_W" INTEGER DEFAULT 0,
    "amazonLink" TEXT DEFAULT '',
    "side_panel" TEXT,
    "external_volume" TEXT,
    "internal_35_bays" INTEGER DEFAULT 0,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PSU" (
    "id" TEXT NOT NULL,
    "type" "PSUType" NOT NULL DEFAULT 'ATX',
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "efficiency" "PSUEff" NOT NULL DEFAULT 'bronze',
    "amazonLink" TEXT DEFAULT '',
    "wattage" INTEGER DEFAULT 0,
    "modular" "PSUModul" NOT NULL DEFAULT 'none',
    "color" TEXT,

    CONSTRAINT "PSU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setup" (
    "id" TEXT NOT NULL,
    "cpu_id" TEXT NOT NULL,
    "gpu_id" TEXT NOT NULL,
    "hdd_id" TEXT NOT NULL,
    "case_id" TEXT NOT NULL,
    "psu_id" TEXT NOT NULL,
    "ram_id" TEXT NOT NULL,
    "name" TEXT DEFAULT '',
    "sound_card_id" TEXT NOT NULL,
    "cpu_cooler_id" TEXT NOT NULL,
    "motherboard_id" TEXT NOT NULL,
    "headphones_id" TEXT NOT NULL,
    "keyboard_id" TEXT NOT NULL,
    "mouse_id" TEXT NOT NULL,
    "webcam_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Setup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SSDOfSetup" (
    "ssd_id" TEXT NOT NULL,
    "setup_id" TEXT NOT NULL,

    CONSTRAINT "SSDOfSetup_pkey" PRIMARY KEY ("ssd_id","setup_id")
);

-- CreateTable
CREATE TABLE "CaseFanOfSetup" (
    "case_fan_id" TEXT NOT NULL,
    "setup_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CaseFanOfSetup_pkey" PRIMARY KEY ("case_fan_id","setup_id")
);

-- CreateTable
CREATE TABLE "SpeakersOfSetup" (
    "speakers_id" TEXT NOT NULL,
    "setup_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "SpeakersOfSetup_pkey" PRIMARY KEY ("speakers_id","setup_id")
);

-- CreateTable
CREATE TABLE "MonitorsOfSetup" (
    "monitor_id" TEXT NOT NULL,
    "setup_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "MonitorsOfSetup_pkey" PRIMARY KEY ("monitor_id","setup_id")
);

-- CreateTable
CREATE TABLE "Monitor" (
    "id" TEXT NOT NULL,
    "screen_size" INTEGER DEFAULT 0,
    "resolution" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],
    "amazonLink" TEXT DEFAULT '',
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "refresh_rate" INTEGER DEFAULT 60,
    "response_time" INTEGER DEFAULT 1,
    "panel_type" "MonitorPanelType" NOT NULL DEFAULT 'TN',
    "aspect_ratio" TEXT,

    CONSTRAINT "Monitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoundCard" (
    "id" TEXT NOT NULL,
    "channels" TEXT,
    "digital_audio" TEXT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "amazonLink" TEXT DEFAULT '',
    "snr" INTEGER DEFAULT 0,
    "sample_rate" INTEGER DEFAULT 0,
    "chipset" TEXT,
    "interface" TEXT,

    CONSTRAINT "SoundCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Headphones" (
    "id" TEXT NOT NULL,
    "type" "HeadphoneTypes" NOT NULL DEFAULT 'Circumaural',
    "frequency_response" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],
    "microphone" BOOLEAN DEFAULT false,
    "wireless" BOOLEAN DEFAULT false,
    "amazonLink" TEXT DEFAULT '',
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "noise_cancellation" BOOLEAN DEFAULT false,
    "enclosure_type" "EnclosureType" NOT NULL DEFAULT 'Closed',
    "color" TEXT,

    CONSTRAINT "Headphones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keyboard" (
    "id" TEXT NOT NULL,
    "style" "KeyboardStyle" NOT NULL DEFAULT 'Gaming',
    "switches" TEXT,
    "backlit" TEXT,
    "name" TEXT NOT NULL,
    "amazonLink" TEXT DEFAULT '',
    "imageUrl" TEXT DEFAULT '',
    "tenkeyless" BOOLEAN DEFAULT true,
    "connection_type" "ConnectionType" NOT NULL DEFAULT 'Wired',
    "color" TEXT,

    CONSTRAINT "Keyboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mouse" (
    "id" TEXT NOT NULL,
    "tracking_method" "MouseTrackMethod" NOT NULL DEFAULT 'Laser',
    "connection_type" "ConnectionType" NOT NULL DEFAULT 'Wired',
    "max_dpi" INTEGER DEFAULT 0,
    "amazonLink" TEXT DEFAULT '',
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "hand_orientation" "MouseOrientation" NOT NULL DEFAULT 'Right',
    "color" TEXT,

    CONSTRAINT "Mouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speakers" (
    "id" TEXT NOT NULL,
    "configuration" TEXT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "wattage" INTEGER DEFAULT 0,
    "frequency_response" INTEGER DEFAULT 0,
    "amazonLink" TEXT DEFAULT '',
    "color" TEXT,

    CONSTRAINT "Speakers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Webcam" (
    "id" TEXT NOT NULL,
    "resolutions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "connection" "ConnectionType" NOT NULL DEFAULT 'Wired',
    "focus_type" "FocusType" NOT NULL DEFAULT 'Auto',
    "os" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "amazonLink" TEXT DEFAULT '',
    "fov" INTEGER DEFAULT 0,

    CONSTRAINT "Webcam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseFan" (
    "id" TEXT NOT NULL,
    "size" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "color" TEXT,
    "amazonLink" TEXT DEFAULT '',
    "rpm" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],
    "airflow" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],

    CONSTRAINT "CaseFan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_cpu_id_fkey" FOREIGN KEY ("cpu_id") REFERENCES "CPU"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_gpu_id_fkey" FOREIGN KEY ("gpu_id") REFERENCES "GPU"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_hdd_id_fkey" FOREIGN KEY ("hdd_id") REFERENCES "HDD"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "Case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_ram_id_fkey" FOREIGN KEY ("ram_id") REFERENCES "RAM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_psu_id_fkey" FOREIGN KEY ("psu_id") REFERENCES "PSU"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_sound_card_id_fkey" FOREIGN KEY ("sound_card_id") REFERENCES "SoundCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_cpu_cooler_id_fkey" FOREIGN KEY ("cpu_cooler_id") REFERENCES "CPUCooler"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_motherboard_id_fkey" FOREIGN KEY ("motherboard_id") REFERENCES "Motherboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_headphones_id_fkey" FOREIGN KEY ("headphones_id") REFERENCES "Headphones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_keyboard_id_fkey" FOREIGN KEY ("keyboard_id") REFERENCES "Keyboard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_mouse_id_fkey" FOREIGN KEY ("mouse_id") REFERENCES "Mouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_webcam_id_fkey" FOREIGN KEY ("webcam_id") REFERENCES "Webcam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Setup" ADD CONSTRAINT "Setup_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SSDOfSetup" ADD CONSTRAINT "SSDOfSetup_ssd_id_fkey" FOREIGN KEY ("ssd_id") REFERENCES "SSD"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SSDOfSetup" ADD CONSTRAINT "SSDOfSetup_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "Setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseFanOfSetup" ADD CONSTRAINT "CaseFanOfSetup_case_fan_id_fkey" FOREIGN KEY ("case_fan_id") REFERENCES "CaseFan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CaseFanOfSetup" ADD CONSTRAINT "CaseFanOfSetup_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "Setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpeakersOfSetup" ADD CONSTRAINT "SpeakersOfSetup_speakers_id_fkey" FOREIGN KEY ("speakers_id") REFERENCES "Speakers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpeakersOfSetup" ADD CONSTRAINT "SpeakersOfSetup_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "Setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonitorsOfSetup" ADD CONSTRAINT "MonitorsOfSetup_monitor_id_fkey" FOREIGN KEY ("monitor_id") REFERENCES "Monitor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonitorsOfSetup" ADD CONSTRAINT "MonitorsOfSetup_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "Setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
