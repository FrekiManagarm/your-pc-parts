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
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "avatarUrl" TEXT DEFAULT '',
    "stripeId" TEXT DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "role" "UserRole" DEFAULT 'CLIENT',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CPUCooler" (
    "id" SERIAL NOT NULL,
    "rpm" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "noise_level" INTEGER DEFAULT 0,
    "color" TEXT,
    "size" INTEGER,

    CONSTRAINT "CPUCooler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motherboard" (
    "id" SERIAL NOT NULL,
    "socket" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "form_factor" TEXT NOT NULL,
    "max_memory" INTEGER NOT NULL DEFAULT 0,
    "memory_slots" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "color" TEXT,

    CONSTRAINT "Motherboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RAM" (
    "id" SERIAL NOT NULL,
    "speed" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],
    "modules" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "price_per_gb" INTEGER NOT NULL DEFAULT 0,
    "color" TEXT,
    "imageUrl" TEXT DEFAULT '',
    "name" TEXT NOT NULL,
    "first_word_latency" TEXT DEFAULT '',
    "cas_latency" TEXT DEFAULT '',

    CONSTRAINT "RAM_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CPU" (
    "id" SERIAL NOT NULL,
    "core_count" INTEGER NOT NULL DEFAULT 0,
    "threads_count" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "core_clock" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "boost_clock" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "tdp" INTEGER DEFAULT 0,
    "graphics" BOOLEAN DEFAULT false,
    "smt" BOOLEAN DEFAULT false,

    CONSTRAINT "CPU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HDD" (
    "id" SERIAL NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 0,
    "price_per_gb" INTEGER NOT NULL DEFAULT 0,
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
    "id" SERIAL NOT NULL,
    "capacity" INTEGER NOT NULL DEFAULT 0,
    "price_per_gb" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "type" TEXT,
    "cache" INTEGER DEFAULT 0,
    "form_factor" TEXT,
    "interface" TEXT,

    CONSTRAINT "SSD_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GPU" (
    "id" SERIAL NOT NULL,
    "chipset" TEXT DEFAULT '',
    "memory" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "core_clock" INTEGER DEFAULT 0,
    "boost_clock" INTEGER DEFAULT 0,
    "color" TEXT DEFAULT '',
    "length" INTEGER DEFAULT 0,

    CONSTRAINT "GPU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "type" "CaseType" NOT NULL DEFAULT 'ATX',
    "color" TEXT DEFAULT '',
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "included_PSU_W" INTEGER DEFAULT 0,
    "side_panel" TEXT,
    "external_volume" TEXT,
    "internal_35_bays" INTEGER DEFAULT 0,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PSU" (
    "id" SERIAL NOT NULL,
    "type" "PSUType" NOT NULL DEFAULT 'ATX',
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "efficiency" "PSUEff" NOT NULL DEFAULT 'bronze',
    "wattage" INTEGER DEFAULT 0,
    "modular" "PSUModul" NOT NULL DEFAULT 'none',
    "color" TEXT,

    CONSTRAINT "PSU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setup" (
    "id" SERIAL NOT NULL,
    "cpu_id" INTEGER NOT NULL,
    "gpu_id" INTEGER NOT NULL,
    "hdd_id" INTEGER NOT NULL,
    "case_id" INTEGER NOT NULL,
    "psu_id" INTEGER NOT NULL,
    "ram_id" INTEGER NOT NULL,
    "name" TEXT DEFAULT '',
    "sound_card_id" INTEGER NOT NULL,
    "cpu_cooler_id" INTEGER NOT NULL,
    "motherboard_id" INTEGER NOT NULL,
    "headphones_id" INTEGER NOT NULL,
    "keyboard_id" INTEGER NOT NULL,
    "mouse_id" INTEGER NOT NULL,
    "webcam_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Setup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SSDOfSetup" (
    "ssd_id" INTEGER NOT NULL,
    "setup_id" INTEGER NOT NULL,

    CONSTRAINT "SSDOfSetup_pkey" PRIMARY KEY ("ssd_id","setup_id")
);

-- CreateTable
CREATE TABLE "CaseFanOfSetup" (
    "case_fan_id" INTEGER NOT NULL,
    "setup_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CaseFanOfSetup_pkey" PRIMARY KEY ("case_fan_id","setup_id")
);

-- CreateTable
CREATE TABLE "SpeakersOfSetup" (
    "speakers_id" INTEGER NOT NULL,
    "setup_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "SpeakersOfSetup_pkey" PRIMARY KEY ("speakers_id","setup_id")
);

-- CreateTable
CREATE TABLE "MonitorsOfSetup" (
    "monitor_id" INTEGER NOT NULL,
    "setup_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "MonitorsOfSetup_pkey" PRIMARY KEY ("monitor_id","setup_id")
);

-- CreateTable
CREATE TABLE "Monitor" (
    "id" SERIAL NOT NULL,
    "screen_size" INTEGER DEFAULT 0,
    "resolution" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],
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
    "id" SERIAL NOT NULL,
    "channels" TEXT,
    "digital_audio" TEXT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "snr" INTEGER DEFAULT 0,
    "sample_rate" INTEGER DEFAULT 0,
    "chipset" TEXT,
    "interface" TEXT,

    CONSTRAINT "SoundCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Headphones" (
    "id" SERIAL NOT NULL,
    "type" "HeadphoneTypes" NOT NULL DEFAULT 'Circumaural',
    "frequency_response" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],
    "microphone" BOOLEAN DEFAULT false,
    "wireless" BOOLEAN DEFAULT false,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "noise_cancellation" BOOLEAN DEFAULT false,
    "enclosure_type" "EnclosureType" NOT NULL DEFAULT 'Closed',
    "color" TEXT,

    CONSTRAINT "Headphones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keyboard" (
    "id" SERIAL NOT NULL,
    "style" "KeyboardStyle" NOT NULL DEFAULT 'Gaming',
    "switches" TEXT,
    "backlit" TEXT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "tenkeyless" BOOLEAN DEFAULT true,
    "connection_type" "ConnectionType" NOT NULL DEFAULT 'Wired',
    "color" TEXT,

    CONSTRAINT "Keyboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mouse" (
    "id" SERIAL NOT NULL,
    "tracking_method" "MouseTrackMethod" NOT NULL DEFAULT 'Laser',
    "connection_type" "ConnectionType" NOT NULL DEFAULT 'Wired',
    "max_dpi" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "hand_orientation" "MouseOrientation" NOT NULL DEFAULT 'Right',
    "color" TEXT,

    CONSTRAINT "Mouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speakers" (
    "id" SERIAL NOT NULL,
    "configuration" TEXT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "wattage" INTEGER DEFAULT 0,
    "frequency_response" INTEGER DEFAULT 0,
    "color" TEXT,

    CONSTRAINT "Speakers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Webcam" (
    "id" SERIAL NOT NULL,
    "resolutions" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "connection" "ConnectionType" NOT NULL DEFAULT 'Wired',
    "focus_type" "FocusType" NOT NULL DEFAULT 'Auto',
    "os" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "fov" INTEGER DEFAULT 0,

    CONSTRAINT "Webcam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseFan" (
    "id" SERIAL NOT NULL,
    "size" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT DEFAULT '',
    "color" TEXT,
    "rpm" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],
    "airflow" INTEGER[] DEFAULT ARRAY[0, 0]::INTEGER[],

    CONSTRAINT "CaseFan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_emailAddress_key" ON "User"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_provider_account_id_key" ON "Account"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_session_token_key" ON "Session"("session_token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
