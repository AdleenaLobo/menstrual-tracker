CREATE TABLE "usercycledata" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userid" uuid,
	"cycle" text,
	"status" text,
	"flow" text,
	"symptoms" text,
	"comments" text
);
--> statement-breakpoint
ALTER TABLE "usercycledata" ADD CONSTRAINT "usercycledata_userid_users_id_fk" FOREIGN KEY ("userid") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "usercycledata" ADD CONSTRAINT "usercycledata_cycle_menstrualcycledata_phase_fk" FOREIGN KEY ("cycle") REFERENCES "public"."menstrualcycledata"("phase") ON DELETE no action ON UPDATE no action;