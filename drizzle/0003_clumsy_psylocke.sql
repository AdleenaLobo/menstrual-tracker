ALTER TABLE "usercycledata" DROP CONSTRAINT "usercycledata_cycle_menstrualcycledata_phase_fk";
--> statement-breakpoint
ALTER TABLE "usercycledata" ALTER COLUMN "cycle" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "usercycledata" ADD CONSTRAINT "usercycledata_cycle_menstrualcycledata_id_fk" FOREIGN KEY ("cycle") REFERENCES "public"."menstrualcycledata"("id") ON DELETE no action ON UPDATE no action;