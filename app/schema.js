"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menstrualcycledata = exports.users = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey().notNull(),
    name: (0, pg_core_1.text)("name").notNull(),
    email: (0, pg_core_1.text)("email").notNull().unique(),
    password: (0, pg_core_1.text)("password").notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
});
exports.menstrualcycledata = (0, pg_core_1.pgTable)("menstrualcycledata", {
    id: (0, pg_core_1.uuid)("id").defaultRandom().primaryKey().notNull(),
    phase: (0, pg_core_1.text)("phase").notNull(),
    likelysymptoms: (0, pg_core_1.text)("likelysymptoms").notNull(),
    dietplan: (0, pg_core_1.text)("dietplan").notNull(),
    recommendedactivity: (0, pg_core_1.text)("recommendedactivity").notNull(),
});
// Define more tables as needed
