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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_05_004455) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "citext"
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.integer "answerer_id", null: false
    t.integer "question_id", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answerer_id"], name: "index_answers_on_answerer_id"
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "downvotes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "answer_id", default: 0
    t.index ["user_id", "question_id", "answer_id"], name: "index_downvotes_on_user_id_and_question_id_and_answer_id", unique: true
  end

  create_table "questions", force: :cascade do |t|
    t.citext "title", null: false
    t.integer "questioner_id", null: false
    t.string "description", null: false
    t.boolean "solved", default: false, null: false
    t.boolean "has_answers", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["questioner_id"], name: "index_questions_on_questioner_id"
  end

  create_table "upvotes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "question_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "answer_id", default: 0
    t.index ["user_id", "question_id", "answer_id"], name: "index_upvotes_on_user_id_and_question_id_and_answer_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
