    CREATE TABLE exercises(
   ex_id          SERIAL PRIMARY KEY
   ,Exercise      VARCHAR(30)
   ,Equipment     VARCHAR(30)
   ,ExerciseType  VARCHAR(30)
   ,MajorMuscle   VARCHAR(30)
   ,MinorMuscle   VARCHAR(30)
   ,Example       VARCHAR
   ,Notes         VARCHAR
   ,Modifications VARCHAR
   );


 INSERT INTO exercises(Exercise,Equipment,ExerciseType,MajorMuscle,MinorMuscle,Example,Notes,Modifications) 
 VALUES ('Anti-Rotation','Landmine','Weight','Core','Oblique','https://dl.airtable.com/Q5yXXob9QM6feizhmuqD_06.gif','Keep your core tight and shoulders far from your ears.','Easier: No Weight on the Bar')
 ,('Bicycle Crunch','Body Weight','Weight','Core','','https://dl.airtable.com/Y0JUbM2YTfe8uRz0jb5w_200.gif','The lower the "straight" leg is to the ground the more challenging this exercise is.','Easier: Move Slower, Legs higher in the air
 Harder: Keep shoulder blades off the ground entire time')
 ,('Cable Woodchop','Cable','Weight','Core','','https://dl.airtable.com/hYoL9pXYRFas3KrUmyCZ_horizontalwoodchop.jpg','The movement should originate from your core not your shoulders. The arms are just the vessel','')
 ,('Flutter Kick','Body Weight','Weight','Core','','https://dl.airtable.com/rsRW7e2JQMSscISPxOwm_Flutter-Kicks.gif','Her neck looks like its undergoing some serious strain. Feel free to leave yours on the ground.','')
 ,('Front-Load Squat','Bar,Squat Rack','Weight','Legs','Core','https://dl.airtable.com/u2Z55mWSQ1eZWji9mbPI_front.gif','Bar + 35LB','')
 ,('Jacknife','Bosu Ball','Weight','Core','','https://dl.airtable.com/rxwquqYqSvyYWckjCCI6_Jacknife.gif','','')
 ,('L-Sit','Machine','Weight','Core','Arms, Shoulders','https://dl.airtable.com/g4PyzXffRNqwPdXd4R0j_68ddb0d2-add5-4124-ac47-7687817d377a.jpg','','')
 ,('Leg Raise','Body Weight','Weight','Core','','https://media3.giphy.com/media/2LtUR24UvCZdC/giphy.gif','Hold onto something heavy','')
 ,('Lying Leg Raises','Body Weight','Weight','Core','','https://dl.airtable.com/poLyFerTtuakObeRkXam_lying.gif','','')
 ,('Mountain Climbers','Body Weight,Bosu Ball','Cardio','Core','Full Body','https://dl.airtable.com/irHgy8wcTOaOoGUxhSxa_mountain-climbers-gif-3.gif','','Easier: Step in, instead of running your knees')
 ,('Pike to Superman','Bosu Ball','Weight','Core','','https://dl.airtable.com/RqwAmFt5SaPkV2RGNC78_30-best-ab-workouts-pike-to-superman.jpg','','')
 ,('Plank','Body Weight','Weight','Core','Full Body','https://dl.airtable.com/oAufzPV5TLaAWqvawz9T_plank.jpg','','Easier: Go from your knees')
 ,('Plank Jack','Band,Body Weight','Cardio','Core','Glutes, Full Body','https://dl.airtable.com/gQzMkwbOSdab50QPoMEB_3705bd36-6b31-42df-9dd1-8d4984b797dc.gif','','Easier: Step out, instead of jumping your knees')
 ,('Reverse Crunches','Body Weight','Weight','Core','','https://dl.airtable.com/VaOguQgQI6w8qryauNZQ_reverse.gif','','')
 ,('Russian Twist','Kettlebells,Dumbbells','Weight','Core','','https://dl.airtable.com/dYG39TGTPavUaPz63Jsy_26c0501d-0254-4bc7-9b79-47b004393d4d.gif','','')
 ,('Seated Rope Pull','Machine','Weight','Back','Lats, Core','https://dl.airtable.com/DtEGIKBaRmK5pvUoC217_v-ropeflex.gif','','')
 ,('Side Plank','Body Weight','Weight','Core','Oblique, Full Body','https://dl.airtable.com/keRG2g3RECoT3LxhDGtQ__main2_sideplank.jpg','','Easier: do the movement from your knees')
 ,('Side Plank Dips','Body Weight','Weight','Core','Oblique','https://dl.airtable.com/wkTRLvHTt2o4UX8RLo61_Side-Plank-Hip-Dips.gif','','Easier: do the movement from your knees')
 ,('Side Plank with Leg Lift','Band,Body Weight','Weight','Core','Oblique','https://dl.airtable.com/llvinxQRxCzG0K0YihOQ_75dcba8e-f0af-48c0-a6e8-c477b738911e.gif','','Easier: do the movement from your knees')
 ,('Situp and Throw','Medicine Ball','Weight','Core','Triceps','https://dl.airtable.com/NDsSU55jRXSUAdKHEZA3_30-best-ab-exercises-situp-and-throw.jpg','','')
 ,('Spiderman Pushup','Body Weight','Weight','Chest','Full Body','https://dl.airtable.com/OK93O1xWRA2yu3GG8zoF_0dd5e852-dd90-4f1e-a570-c20dca7c72cf.gif','','Easier: do a pushup from your knees, and then the spiderman movement')
 ,('Standing Oblique Crunch','Dumbbells','Weight','Core','Oblique','https://dl.airtable.com/38n4dcbTgCM2tjvxWKUb_Standing-Oblique-Crunches.gif','20LB Weight Minimum','')
 ,('Straightup Situp','Dumbbells','Weight','Core','','https://dl.airtable.com/GPXUq5zcRoGqP9WbvJLa_30-best-ab-exercises-straight-leg-barbell-situp.jpg','','')
 ,('TRX Mountain Climber','TRX','Weight','Core','Full Body','https://dl.airtable.com/JOfDEnjtTPuDxlUodlWI_TRX-mountain-climbers.gif','','')
 ,('TRX Plank','TRX','Weight','Core','Full Body','https://dl.airtable.com/bWQz7ZlCT7mF3UG399Ep_72813ed1a4b64cbc2d206a512f0b93c2.jpeg','','')
 ,('Twisted Mountain Climbers','Body Weight,Bosu Ball','Cardio','Core','Oblique, Full Body','https://dl.airtable.com/QqbBRbLRFaMBuFe9VR8g_mountain-climbers-gif-3.gif','','')
 ,('V-Pass','Bosu Ball','Weight','Core','Legs','https://dl.airtable.com/EQe3jRjvQ8icCiuXXsXG_bb_stability-ball_v-up1.gif','','')
 ,('Weighted Machine Situp','Machine','Weight','Core','','https://dl.airtable.com/8NjKMbRUTSetijEFXjk4_b16a06f1-f9cd-4721-b760-292fb1a119d8.gif','','')
 ,('Weighted Punches','Dumbbells','Cardio','Core','','https://dl.airtable.com/AZ5zCPLNRJBCx5CwWUwn_cross-punch-exercise-illustration.gif','','Easier: Punch without weights')
 ,('Deadbug','Body Weight','Weight','Core','','https://dl.airtable.com/Vwxt6KjRW62PrDrpTDSx_exAX6p.gif','Really good if you have lower back pain and want to do an ab workout','')
 ,('Dumbell Bicep Curl','Dumbell','Weight','Bicep','','https://media.giphy.com/media/3ohs4ncqYSi7FzjJgQ/giphy.gif','Keep your elbows sationary by your sides.','Supinate your hand as much as possible towards the top of the motion.')
 ,('Bench Dips','Body Weight','Weight','Tricep','Pectoral','https://thumbs.gfycat.com/CompleteZigzagFossa-small.gif','Focus on using the tricep all the way through the range of motion.','Add weight to your lap to increase resistance.')
 ,('Bench Press','Bench, Barbell','Weight','Pectoral','Tricep','https://media0.giphy.com/media/rYq49SlUrPqhy/source.gif','Focus on using the pectoral muscles all the way through the range of motion.','If you experiance shoulder pain, move your elbows in closer to your sides.')
 ,('Incline Bicep Curl','Bench, Dumbell','Weight','Bicep','','https://workouts4fitness.files.wordpress.com/2017/05/incline-dumbbell-curls.gif?w=355','Focus on keeping your elbows back so your upper arm stays perpendicular to the ground.','Alternate between both arms and one arm at a time.')
 ,('Standing Lateral Raises','Dumbell','Weight','Shoulder','Lateral Deltoid','https://thumbs.gfycat.com/GreedyUnpleasantBlackfootedferret-size_restricted.gif','Slightly bend your elbows and holr the position throughout the motion.  Keep your Hands and elbows even with your shoulders at the top of the exercise.','')
 ,('Dumbell Shoulder Press','Dumbell','Weight','Shoulder','Upper Pectoral, Triceps','https://thumbs.gfycat.com/FrequentObedientFrilledlizard-size_restricted.gif','','Alternate between both arms and one arm at a time.')
 ,('Push-Up','Flat Surface','Body Weight','Pectoral','Tricep, Anterior Deltoid','https://thumbs.gfycat.com/GlossySkinnyDuckbillcat-small.gif','Keep your core, legs and butt tight, don''t curve your body up or down.','If you experiance shoulder pain, move your elbows in closer to your sides.')
 ,('Tricep KickBack','Band, Dumbell, cable pully','Weight','Tricep','Rear Deltoid','https://yurielkaim.com/wp-content/uploads/2016/11/Tricep-Kickbacks.gif','Keep your upper arm parallel to the ground and move slowly without swinging the weight.','Try and hold at the top of the exercise for better targeting.')
 ,('Lying Tricep Extension', 'Dumbell', 'Weight', 'Tricep', '', 'https://thumbs.gfycat.com/FrigidShallowCottonmouth-size_restricted.gif', 'Keep your elbows in the same location throughout the movement.', ''); 

INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Weighted Punches',
        'Dumbbells',
        'Cardio',
        'Core',
        NULL,
        'https://dl.airtable.com/AZ5zCPLNRJBCx5CwWUwn_cross-punch-exercise-illustration.gif',
        NULL,
        'Easier: Punch without weights');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Weighted Machine Situp',
        'Machine',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/8NjKMbRUTSetijEFXjk4_b16a06f1-f9cd-4721-b760-292fb1a119d8.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('V-Pass',
        'Bosu Ball',
        'Weight',
        'Core',
        NULL,
        'https: //dl.airtable.com/EQe3jRjvQ8icCiuXXsXG_bb_stability-ball_v-up1.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Twisted Mountain Climbers',
        'Body Weight,Bosu Ball',
        'Cardio',
        'Core',
        'Full Body, Oblique',
        'https://dl.airtable.com/QqbBRbLRFaMBuFe9VR8g_mountain-climbers-gif-3.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Tricep KickBack',
        'Band, Dumbell, cable pully',
        'Weight',
        'Arms',
        'Rear Deltoid',
        'https://yurielkaim.com/wp-content/uploads/2016/11/Tricep-Kickbacks.gif',
        'Keep your upper arm parallel to the ground and move slowly without swinging the weight.',
        'Try and hold at the top of the exercise for better targeting.');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('TRX Plank',
        'TRX',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/bWQz7ZlCT7mF3UG399Ep_72813ed1a4b64cbc2d206a512f0b93c2.jpeg',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('TRX Mountain Climber',
        'TRX',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/JOfDEnjtTPuDxlUodlWI_TRX-mountain-climbers.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('TRX Mid Row',
        'TRX System',
        'Weight',
        'Back',
        'Rhomboids',
        'https://thumbs.gfycat.com/IllfatedQuickAsiandamselfly-size_restricted.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('TRX Chest Press',
        'TRX System',
        'Weight',
        'Chest',
        'Mid Chest',
        'https://evofitness.ch/wp-content/uploads/2017/05/TRX-chest-press.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('TRX Bicep Curl',
        'TRX System',
        'Weight',
        'Arms',
        NULL,
        'https://centralfloridapatriots.files.wordpress.com/2016/09/trx-bicep-curls.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Straightup Situp',
        'Dumbbells',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/GPXUq5zcRoGqP9WbvJLa_30-best-ab-exercises-straight-leg-barbell-situp.jpg',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Standing Oblique Crunch',
        'Dumbbells',
        'Weight',
        'Core',
        'Oblique',
        'https://dl.airtable.com/38n4dcbTgCM2tjvxWKUb_Standing-Oblique-Crunches.gif',
        '20LB Weight Minimum',
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Standing Lateral Raises',
        'Dumbell',
        'Weight',
        'Shoulder',
        NULL,
        'https://thumbs.gfycat.com/GreedyUnpleasantBlackfootedferret-size_restricted.gif',
        'Slightly bend your elbows and holr the position throughout the motion.  Keep your Hands and elbows even with your shoulders at the top.',
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Spiderman Pushup',
        'Body Weight',
        'Weight',
        'Core',
        'Chest,Oblique',
        'https://dl.airtable.com/OK93O1xWRA2yu3GG8zoF_0dd5e852-dd90-4f1e-a570-c20dca7c72cf.gif',
        NULL,
        'Easier: do a pushup from your knees, and then the spiderman movement');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Situp and Throw',
        'Medicine Ball',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/NDsSU55jRXSUAdKHEZA3_30-best-ab-exercises-situp-and-throw.jpg',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Side Plank with Leg Lift',
        'Band,Body Weight',
        'Weight',
        'Core',
        'Oblique',
        'https://dl.airtable.com/llvinxQRxCzG0K0YihOQ_75dcba8e-f0af-48c0-a6e8-c477b738911e.gif',
        NULL,
        'Easier: do the movement from your knees');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Side Plank Dips',
        'Body Weight',
        'Weight',
        'Core',
        'Oblique',
        'https://dl.airtable.com/wkTRLvHTt2o4UX8RLo61_Side-Plank-Hip-Dips.gif',
        NULL,
        'Easier: do the movement from your knees');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Side Plank',
        'Body Weight',
        'Weight',
        'Core, Full Body',
        'Oblique',
        'https://dl.airtable.com/keRG2g3RECoT3LxhDGtQ__main2_sideplank.jpg',
        NULL,
        'Easier: do the movement from your knees');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Seated Rope Pull',
        'Machine',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/DtEGIKBaRmK5pvUoC217_v-ropeflex.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Russian Twist',
        'Kettlebells, Dumbbells',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/dYG39TGTPavUaPz63Jsy_26c0501d-0254-4bc7-9b79-47b004393d4d.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Reverse Crunches',
        'Body Weight',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/VaOguQgQI6w8qryauNZQ_reverse.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Push-Up',
        'Flat Surface',
        'Body Weight',
        'Chest',
        'Tricep',
        'https://thumbs.gfycat.com/GlossySkinnyDuckbillcat-small.gif',
        'Keep your core, legs and butt tight, don''t curve your body up or down.',
        'If you experiance shoulder pain, move your elbows in closer to your sides.');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Plank Jack',
        'Band,Body Weight',
        'Cardio',
        'Core',
        NULL,
        'https://dl.airtable.com/gQzMkwbOSdab50QPoMEB_3705bd36-6b31-42df-9dd1-8d4984b797dc.gif',
        NULL,
        'Easier: Step out, instead of jumping your knees');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Plank',
        'Body Weight',
        'Weight',
        'Core',
        'Chest',
        'https://dl.airtable.com/oAufzPV5TLaAWqvawz9T_plank.jpg',
        NULL,
        'Easier: Go from your knees');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Pike to Superman',
        'Bosu Ball',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/RqwAmFt5SaPkV2RGNC78_30-best-ab-workouts-pike-to-superman.jpg',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Mountain Climbers',
        'Body Weight,Bosu Ball',
        'Cardio',
        'Core',
        NULL,
        'https://dl.airtable.com/irHgy8wcTOaOoGUxhSxa_mountain-climbers-gif-3.gif',
        NULL,
        'Easier: Step in, instead of running your knees');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Lying Leg Raises',
        'Body Weight',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/poLyFerTtuakObeRkXam_lying.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Leg Raise',
        'Body Weight',
        'Weight',
        'Core',
        NULL,
        'https://media3.giphy.com/media/2LtUR24UvCZdC/giphy.gif',
        'Hold onto something heavy',
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('L-Sit',
        'Machine',
        'Weight',
        'Core',
        'Arms, Shoulders',
        'https://dl.airtable.com/g4PyzXffRNqwPdXd4R0j_68ddb0d2-add5-4124-ac47-7687817d377a.jpg',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Jacknife',
        'Bosu Ball',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/rxwquqYqSvyYWckjCCI6_Jacknife.gif',
        NULL,
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Incline Bicep Curl',
        'Bench, Dumbell',
        'Weight',
        'Arms',
        NULL,
        'https://workouts4fitness.files.wordpress.com/2017/05/incline-dumbbell-curls.gif?w=355',
        'Focus on keeping your elbows back so your upper arm stays perpendicular to the ground.',
        'Alternate between both arms and one arm at a time.');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Front-Load Squat',
        'Bar,Squat Rack',
        'Weight',
        'Legs',
        'Core, Glutes',
        'https://dl.airtable.com/u2Z55mWSQ1eZWji9mbPI_front.gif',
        'Bar + 35LB',
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Flutter Kick',
        'Body Weight',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/rsRW7e2JQMSscISPxOwm_Flutter-Kicks.gif',
        'Her neck looks like its undergoing some serious strain. Feel free to leave yours on the ground.',
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Dumbell Shoulder Press',
        'Dumbell',
        'Weight',
        'Shoulder',
        NULL,
        'https://thumbs.gfycat.com/FrequentObedientFrilledlizard-size_restricted.gif',
        NULL,
        'Alternate between both arms and one arm at a time.');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Dumbell Bicep Curl',
        'Dumbell',
        'Weight',
        'Arms',
        NULL,
        'https://media.giphy.com/media/3ohs4ncqYSi7FzjJgQ/giphy.gif',
        'Keep your elbows sationary by your sides.',
        'Supinate your hand as much as possible towards the top of the motion.');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Deadbug',
        'Body Weight',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/Vwxt6KjRW62PrDrpTDSx_exAX6p.gif',
        'Really good if you have lower back pain and want to do an ab workout',
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Cable Woodchop',
        'Cable',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/hYoL9pXYRFas3KrUmyCZ_horizontalwoodchop.jpg',
        'The movement should originate from your core not your shoulders. The arms are just the vessel',
        NULL);


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Bicycle Crunch',
        'Body Weight',
        'Weight',
        'Core',
        NULL,
        'https://dl.airtable.com/Y0JUbM2YTfe8uRz0jb5w_200.gif',
        'The lower the "straight" leg is to the ground the more challenging this exercise is.',
        'Easier: Move Slower, Legs higher in the air');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Bench Press',
        'Bench, Barbell',
        'Weight',
        'Chest',
        'Tricep',
        'https://media0.giphy.com/media/rYq49SlUrPqhy/source.gif',
        'Focus on using the pectoral muscles all the way through the range of motion.',
        'If you experiance shoulder pain, move your elbows in closer to your sides.');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Bench Dips',
        'Body Weight',
        'Weight',
        'Arms',
        'Pectoral',
        'https://thumbs.gfycat.com/CompleteZigzagFossa-small.gif',
        'Focus on using the tricep all the way through the range of motion.',
        'Add weight to your lap to increase resistance.');


INSERT INTO exercises(exercise,equipment,exercisetype,majormuscle,minormuscle,example,notes,modifications)
VALUES ('Anti-Rotation',
        'Landmine',
        'Weight',
        'Core',
        'Oblique',
        'https://dl.airtable.com/Q5yXXob9QM6feizhmuqD_06.gif',
        'Keep your core tight and shoulders far from your ears.',
        'Easier: No Weight on the Bar');




   create table users(
     user_id serial primary key,
     password VARCHAR(100),
     username VARCHAR(30),
     email VARCHAR(50)
   );

   create table user_exs( 
     user_ex_id SERIAL PRIMARY KEY, 
     user_id INTEGER REFERENCES users (user_id), 
     ex_id INTEGER REFERENCES exercises (ex_id), 
     notes VARCHAR,
     modifications VARCHAR, 
     reps INTEGER,
     sets INTEGER, 
     weight DECIMAL, 
     hr INTEGER,
     min INTEGER,
     sec INTEGER);

insert into user_exs(user_id, ex_id, reps,
                     sets, weight, modifications, notes, hr, min, sec)
values(1,
       1,
       10,
       4,
       35,
       null,
       'This is my custom note.',
       0,
       0,
       0);
   