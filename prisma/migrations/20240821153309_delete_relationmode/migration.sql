-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100),
    "pekerjaan" VARCHAR(100),
    "role" VARCHAR(50),
    "profileUrl" TEXT,
    "token" VARCHAR(500),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Learningpath" (
    "id" SERIAL NOT NULL,
    "judul" VARCHAR(100) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Learningpath_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userhaslearning" (
    "id" SERIAL NOT NULL,
    "useremail" TEXT NOT NULL,
    "learningId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "skor" INTEGER,

    CONSTRAINT "userhaslearning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modul" (
    "id" SERIAL NOT NULL,
    "judul" VARCHAR(100) NOT NULL,
    "inti_materi" TEXT NOT NULL,
    "tambahan" TEXT,
    "gambar" TEXT,
    "video" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "learning_id" INTEGER NOT NULL,

    CONSTRAINT "Modul_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kuis" (
    "id" SERIAL NOT NULL,
    "soal" TEXT NOT NULL,
    "opsi_a" TEXT NOT NULL,
    "opsi_b" TEXT NOT NULL,
    "opsi_c" TEXT NOT NULL,
    "opsi_d" TEXT NOT NULL,
    "jawaban" CHAR(1) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "learning_id" INTEGER NOT NULL,

    CONSTRAINT "Kuis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "note" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Learningpath_judul_key" ON "Learningpath"("judul");

-- CreateIndex
CREATE INDEX "userhaslearning_useremail_idx" ON "userhaslearning"("useremail");

-- CreateIndex
CREATE INDEX "userhaslearning_learningId_idx" ON "userhaslearning"("learningId");

-- CreateIndex
CREATE UNIQUE INDEX "Modul_judul_key" ON "Modul"("judul");

-- CreateIndex
CREATE INDEX "Modul_learning_id_idx" ON "Modul"("learning_id");

-- CreateIndex
CREATE INDEX "Kuis_learning_id_idx" ON "Kuis"("learning_id");

-- CreateIndex
CREATE INDEX "Feedback_username_idx" ON "Feedback"("username");

-- AddForeignKey
ALTER TABLE "userhaslearning" ADD CONSTRAINT "userhaslearning_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userhaslearning" ADD CONSTRAINT "userhaslearning_learningId_fkey" FOREIGN KEY ("learningId") REFERENCES "Learningpath"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modul" ADD CONSTRAINT "Modul_learning_id_fkey" FOREIGN KEY ("learning_id") REFERENCES "Learningpath"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kuis" ADD CONSTRAINT "Kuis_learning_id_fkey" FOREIGN KEY ("learning_id") REFERENCES "Learningpath"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
