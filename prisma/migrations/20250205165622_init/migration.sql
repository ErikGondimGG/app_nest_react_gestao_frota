-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "Base api_bot_wpp";

-- CreateTable
CREATE TABLE "Base api_bot_wpp"."tipos_veiculos" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipos_veiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Base api_bot_wpp"."veiculos" (
    "id" SERIAL NOT NULL,
    "placa" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano_fabricacao" INTEGER NOT NULL,
    "ano_modelo" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "hr" INTEGER NOT NULL,
    "capacidade_carga" INTEGER NOT NULL,
    "tipo_veiculo_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "veiculos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Base api_bot_wpp"."veiculos" ADD CONSTRAINT "veiculos_tipo_veiculo_id_fkey" FOREIGN KEY ("tipo_veiculo_id") REFERENCES "Base api_bot_wpp"."tipos_veiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
