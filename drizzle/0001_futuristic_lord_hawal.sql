CREATE TABLE "menstrualcycledata" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"phase" text NOT NULL,
	"likelysymptoms" text NOT NULL,
	"dietplan" text NOT NULL,
	"recommendedactivity" text NOT NULL
);
