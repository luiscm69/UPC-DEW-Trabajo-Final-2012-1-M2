# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120811181600) do

  create_table "articles", :force => true do |t|
    t.string   "articlename"
    t.decimal  "price"
    t.integer  "stock"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "client_vouchers", :force => true do |t|
    t.integer  "patient_id"
    t.integer  "voucher_id"
    t.integer  "article_id"
    t.integer  "cantidad"
    t.decimal  "precio"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "doctor_patients", :force => true do |t|
    t.integer  "doctor_id"
    t.integer  "patient_id"
    t.text     "notes"
    t.string   "image"
    t.string   "condition"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "doctors", :force => true do |t|
    t.string   "authentication"
    t.string   "name"
    t.string   "lastname"
    t.string   "email"
    t.string   "phone"
    t.string   "user"
    t.string   "password"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  create_table "events", :force => true do |t|
    t.string   "name"
    t.datetime "start_at"
    t.datetime "end_at"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "indices", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "notes", :force => true do |t|
    t.string   "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "owner_notes", :force => true do |t|
    t.integer  "owner_id"
    t.integer  "note_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "owner_patients", :force => true do |t|
    t.integer  "owner_id"
    t.integer  "patient_id"
    t.text     "note"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "owners", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "address"
    t.string   "phone"
    t.string   "cellphone"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "patients", :force => true do |t|
    t.string   "name"
    t.string   "species"
    t.string   "race"
    t.string   "blood"
    t.string   "sterilized"
    t.string   "size"
    t.string   "activity"
    t.string   "weight"
    t.string   "bith"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "prospects", :force => true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "address"
    t.binary   "image"
    t.string   "phone"
    t.string   "cellphone"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.boolean  "clientstatus"
  end

  create_table "users", :force => true do |t|
    t.string   "email"
    t.string   "password_digest"
    t.string   "auth_token"
    t.string   "password_reset_token"
    t.datetime "password_reset_sent_at"
    t.datetime "created_at",             :null => false
    t.datetime "updated_at",             :null => false
  end

  create_table "vaccines", :force => true do |t|
    t.string   "name"
    t.string   "patient"
    t.string   "owner"
    t.date     "date"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.date     "expiration"
  end

  create_table "voucher_clientes", :force => true do |t|
    t.integer  "patient_id"
    t.integer  "voucher_id"
    t.integer  "article_id"
    t.integer  "cantidad"
    t.decimal  "precio"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "vouchers", :force => true do |t|
    t.string   "ruc"
    t.string   "direccion"
    t.date     "fecha"
    t.text     "detalle"
    t.decimal  "precio"
    t.integer  "cantidad"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
