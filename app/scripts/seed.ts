// import 'dotenv/config';
// import { getDb } from "..";
// import { menstrualcycledata } from "../schema";

// async function seed(){
//     const db = getDb();
    
//     await db.insert(menstrualcycledata).values([{
//         phase: "Menstural (1-5 days)",
//         likelysymptoms:"Fatigue, Cramps, Mood swings, Lower back pain/body pain, Bloating",
//         dietplan:"Iron-rich foods: spinach, lentils, red meat, pumpkin seeds  : Blood loss can cause low iron → fatigue.|Hydrating foods: cucumber, watermelon : Hydration reduces bloating and headaches.|Warm foods: soups, stews : Warm foods help relax uterine muscles and ease cramps.|Herbal teas: ginger, chamomile, peppermint",
//         recommendedactivity:"Gentle yoga (especially poses for menstrual pain), Walking, Stretching, Avoid high-intensity workouts",
//     },
//     {
//         phase: "Follicular (6-14 days)",
//         likelysymptoms:"Rising energy levels , Increased mental clarity , Improved mood, Light cervical mucus",
//         dietplan:"Protein-rich foods: eggs, fish, tofu : Support hormone production and metabolism.|Cruciferous veggies: broccoli, kale|Complex carbs: oats, quinoa : Complex carbs provide slow-release energy.|Fermented foods: yogurt, kimchi : Probiotics help with estrogen balance.",
//         recommendedactivity:"Moderate to intense workouts (HIIT, running, strength training), Trying new activities or skill-based sports, Social workouts (group classes)",
//     },
//     {
//         phase: "Ovulation (14 Days)",
//         likelysymptoms:"Peak energy and libido, Clear, stretchy cervical mucus, Breast tenderness, Slight pelvic pain",
//         dietplan:"Anti-inflammatory foods: berries, leafy greens, turmeric : Help manage inflammation from ovulation.|Zinc-rich foods: chickpeas, cashews : Zinc supports reproductive function.|Hydrating foods and fluids.|Light, balanced meals : Avoid bloating and fatigue by eating light.",
//         recommendedactivity:"Peak performance: go hard with cardio or strength, Try PR lifts or challenging workouts, Dance, team sports",
//     },
//     {
//         phase: "Luteal  (15-28 Days)",
//         likelysymptoms:"Bloating, Irritability, Breast tenderness, Cravings, Fatigue, Anxiety or sadness (PMS)",
//         dietplan:"Complex carbs: sweet potatoes, brown rice |Magnesium-rich foods: dark chocolate, almonds, spinach|Healthy fats: avocado, chia seeds, flaxseed|Avoid sugar, caffeine, alcohol",
//         recommendedactivity:"Lower intensity: yoga, Pilates, walking , Focus on rest and recovery, Don’t push yourself too hard",
//     },
//     ])
// }

// seed().catch((err)=>{
//     console.error('seed failed:', err);
//     process.exit(1);
// })

// drizzle/seed.ts
import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import { menstrualcycledata } from '../schema';

dotenv.config({ path: '.env' }); // or just '.env' if that's your main one

console.log('URL in use:', process.env.DATABASE_URL);

async function seed() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Needed for Neon
  });

  await client.connect();
  const db = drizzle(client);

   await db.insert(menstrualcycledata).values([{
        phase: "Menstural (1-5 days)",
        likelysymptoms:"Fatigue, Cramps, Mood swings, Lower back pain/body pain, Bloating",
        dietplan:"Iron-rich foods: spinach, lentils, red meat, pumpkin seeds  : Blood loss can cause low iron → fatigue.|Hydrating foods: cucumber, watermelon : Hydration reduces bloating and headaches.|Warm foods: soups, stews : Warm foods help relax uterine muscles and ease cramps.|Herbal teas: ginger, chamomile, peppermint",
        recommendedactivity:"Gentle yoga (especially poses for menstrual pain), Walking, Stretching, Avoid high-intensity workouts",
    },
    {
        phase: "Follicular (6-14 days)",
        likelysymptoms:"Rising energy levels , Increased mental clarity , Improved mood, Light cervical mucus",
        dietplan:"Protein-rich foods: eggs, fish, tofu : Support hormone production and metabolism.|Cruciferous veggies: broccoli, kale|Complex carbs: oats, quinoa : Complex carbs provide slow-release energy.|Fermented foods: yogurt, kimchi : Probiotics help with estrogen balance.",
        recommendedactivity:"Moderate to intense workouts (HIIT, running, strength training), Trying new activities or skill-based sports, Social workouts (group classes)",
    },
    {
        phase: "Ovulation (14 Days)",
        likelysymptoms:"Peak energy and libido, Clear, stretchy cervical mucus, Breast tenderness, Slight pelvic pain",
        dietplan:"Anti-inflammatory foods: berries, leafy greens, turmeric : Help manage inflammation from ovulation.|Zinc-rich foods: chickpeas, cashews : Zinc supports reproductive function.|Hydrating foods and fluids.|Light, balanced meals : Avoid bloating and fatigue by eating light.",
        recommendedactivity:"Peak performance: go hard with cardio or strength, Try PR lifts or challenging workouts, Dance, team sports",
    },
    {
        phase: "Luteal  (15-28 Days)",
        likelysymptoms:"Bloating, Irritability, Breast tenderness, Cravings, Fatigue, Anxiety or sadness (PMS)",
        dietplan:"Complex carbs: sweet potatoes, brown rice |Magnesium-rich foods: dark chocolate, almonds, spinach|Healthy fats: avocado, chia seeds, flaxseed|Avoid sugar, caffeine, alcohol",
        recommendedactivity:"Lower intensity: yoga, Pilates, walking , Focus on rest and recovery, Don’t push yourself too hard",
    },
    ]);

  await client.end();//end the connection
  console.log('✅ Seeded data successfully');
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
