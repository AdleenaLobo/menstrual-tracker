## Phase
- mensuration (1-5)

## likely symptopms
- Fatigue
- Cramps
- Mood swings
- Lower back pain/body pain
- Bloating

## diet plan
- Iron-rich foods: spinach, lentils, red meat, pumpkin seeds  : Blood loss can cause low iron → fatigue.
- Hydrating foods: cucumber, watermelon : Hydration reduces bloating and headaches.
- Warm foods: soups, stews : Warm foods help relax uterine muscles and ease cramps.
- Herbal teas: ginger, chamomile, peppermint

## activity recommendation
- Gentle yoga (especially poses for menstrual pain)
- Walking
- Stretching
- Avoid high-intensity workouts


## Phase
- Follicular (6-14)

## likely symptopms
- Rising energy levels
- Increased mental clarity
- Improved mood
- Light cervical mucus

## diet plan
- Protein-rich foods: eggs, fish, tofu : Support hormone production and metabolism.
- Cruciferous veggies: broccoli, kale
- Complex carbs: oats, quinoa : Complex carbs provide slow-release energy.
- Fermented foods: yogurt, kimchi : Probiotics help with estrogen balance.

## activity recommendation
- Moderate to intense workouts (HIIT, running, strength training)
- Trying new activities or skill-based sports
- Social workouts (group classes)



## Phase
- Ovulation (14)

## likely symptopms
- Peak energy and libido
- Clear, stretchy cervical mucus
- Breast tenderness
- Slight pelvic pain

## diet plan
- Anti-inflammatory foods: berries, leafy greens, turmeric : Help manage inflammation from ovulation.
- Zinc-rich foods: chickpeas, cashews : Zinc supports reproductive function.
- Hydrating foods and fluids
- Light, balanced meals : Avoid bloating and fatigue by eating light.

## activity recommendation
- Peak performance: go hard with cardio or strength
- Try PR lifts or challenging workouts
- Dance, team sports




## Phase
- Luteal  (15-28)

## likely symptopms
- Bloating
- Irritability
- Breast tenderness
- Cravings
- Fatigue
- Anxiety or sadness (PMS)

## diet plan
- Complex carbs: sweet potatoes, brown rice
- Magnesium-rich foods: dark chocolate, almonds, spinach
- Healthy fats: avocado, chia seeds, flaxseed
- Avoid sugar, caffeine, alcohol

## activity recommendation
- Lower intensity: yoga, Pilates, walking
- Focus on rest and recovery
- Don’t push yourself too hard



## What did I learn
- framer motion has changed to motion..its independent now
- how to seed info (mainly the error with database url)[It doesn't work with scripts like seeding since its not a server side or client side its dev hence we need to manually import database url using dotenv and config the path].
- Why can't stripes be added with just backgraound and why do we need background image for that [cuz background just applies solid colors and doesn't work with reapting-liner-gradient hence need it in background image + tailwind doesn't supports it so need to add it as an inline style or the css file].
- How to add stripes [repeating-linear-gradient (degree , from which pixel to which pixel which color needed )] [eg:  backgroundImage: `repeating-linear-gradient(
          45deg,
          #ffcbc4,//0px to 
          #ffcbc4 10px,//10px
          #fc6c85 10px, //from 10px to
          #fc6c85 15px//15px
        )`, and repeat].


- learnt to calculate the window size etc.


- learnt to move the days/ elements to a particular distance (very scary to start)
  - mouse down , mouse move , mouse up
  - onMouseUp -> Bubbling	-> After reaching target and bubbling back up
    onMouseUpCapture ->	Capturing -> Before reaching the event target

- schad-cn uses baises with properly it needs to have a consistent width to know when to snap and not 
