-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "make_id" INTEGER NOT NULL,
    "model_id" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "num_rentals" INTEGER NOT NULL,
    "current_lot_id" INTEGER NOT NULL,
    "car_type_id" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "user_added_id" INTEGER NOT NULL,
    "date_added" DATETIME NOT NULL,
    "in_use" BOOLEAN NOT NULL,
    CONSTRAINT "Car_make_id_fkey" FOREIGN KEY ("make_id") REFERENCES "Make" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "Model" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_current_lot_id_fkey" FOREIGN KEY ("current_lot_id") REFERENCES "Lot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_car_type_id_fkey" FOREIGN KEY ("car_type_id") REFERENCES "CarType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Car_user_added_id_fkey" FOREIGN KEY ("user_added_id") REFERENCES "Manager" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Lot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address_id" INTEGER NOT NULL,
    CONSTRAINT "Lot_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "car_ID" INTEGER NOT NULL,
    "pickup_lot_id" INTEGER NOT NULL,
    "return_lot_id" INTEGER NOT NULL,
    "pickup_date" DATETIME NOT NULL,
    "return_date" DATETIME NOT NULL,
    "date_created" DATETIME NOT NULL,
    "renter_id" INTEGER NOT NULL,
    CONSTRAINT "Reservation_car_ID_fkey" FOREIGN KEY ("car_ID") REFERENCES "Car" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservation_pickup_lot_id_fkey" FOREIGN KEY ("pickup_lot_id") REFERENCES "Lot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservation_return_lot_id_fkey" FOREIGN KEY ("return_lot_id") REFERENCES "Lot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservation_renter_id_fkey" FOREIGN KEY ("renter_id") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lot_id" INTEGER NOT NULL,
    CONSTRAINT "Manager_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "Lot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Model" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "make_id" INTEGER NOT NULL,
    CONSTRAINT "Model_make_id_fkey" FOREIGN KEY ("make_id") REFERENCES "Make" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Make" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CarType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street_address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "state" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Closure" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "lot_id" INTEGER NOT NULL,
    CONSTRAINT "Closure_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "Lot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarFeature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "_CarToCarFeature" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CarToCarFeature_A_fkey" FOREIGN KEY ("A") REFERENCES "Car" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CarToCarFeature_B_fkey" FOREIGN KEY ("B") REFERENCES "CarFeature" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_email_key" ON "Manager"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CarToCarFeature_AB_unique" ON "_CarToCarFeature"("A", "B");

-- CreateIndex
CREATE INDEX "_CarToCarFeature_B_index" ON "_CarToCarFeature"("B");
