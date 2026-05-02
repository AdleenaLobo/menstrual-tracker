import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const menstrualcycledata = pgTable("menstrualcycledata", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  phase: text("phase").notNull(),
  likelysymptoms: text("likelysymptoms").notNull(),
  dietplan: text("dietplan").notNull(),
  recommendedactivity: text("recommendedactivity").notNull(),

});


export const usercycledata = pgTable("usercycledata",{
  id: uuid("id").defaultRandom().primaryKey(),
  user: uuid("userid").references(()=> users.id),//foreign key
  cycle: uuid("cycle").references(()=>menstrualcycledata.id),//change it to menstrual cycle id
  status:text("status"),
  flow:text("flow"),
  symptoms:text("symptoms"),
  comments:text("comments"),
});
// Define more tables as needed
