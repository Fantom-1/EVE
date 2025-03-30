

USE EVE;

CREATE TABLE Information (
    Serial_Number INT AUTO_INCREMENT PRIMARY KEY,
    Events VARCHAR(255),
    Organisor VARCHAR(255),
    Poster_Link VARCHAR(255),
    Thumbnail_Link VARCHAR(255),
    Main_Event VARCHAR(255),
    Status ENUM('Online', 'Expired'),
    Last_Update DATE,
    Field VARCHAR(255),
    About_Event TEXT,
    Prize_Pool INT,
    Eligibility VARCHAR(255),
    Contact_Organisers TEXT,
    Registration_Link VARCHAR(255),
    Teaser VARCHAR(255),
    Event_Date_Time DATETIME
);

INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "AdMADS",
    "Probe",
    "https://i.ibb.co/wNSQZ1FC/AdMads.webp",
    "https://i.ibb.co/5ghSvQqc/AB-Ad-Mads.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-25", 
    "Photography, Story Telling, Designing",
    "Offline Round
The final round of AdMads will be held on the IIITN campus, where participants will have the thrilling opportunity to present their original video advertisements in front of a panel of judges. This is not just a typical ad presentation; it's a chance to showcase your creativity, storytelling, and marketing skills to a live audience. You'll have the spotlight to make an impact with your ad, engaging both the judges and viewers with your innovative ideas and technical execution. The winning ad may even have the chance to be presented on the stage of Abhivyakti! Get ready to bring your vision to life and leave a lasting impression at this exciting final round!
Start: 27 Feb 25, 12:00 PM IST
End: 28 Feb 25, 05:00 PM IST",
    25000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846 
     Kushagrah Singh probe@iiitn.ac.in +919889335425",
    "https://unstop.com/competitions/1303135/register",
    "AdMads:Advertisement Creation",
    "2025-02-27 12:00"
);

INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Musical Armageddon",
    "Crescendo",
    "https://i.ibb.co/JR6fxxhH/Beats-Barrack.webp",
    "https://i.ibb.co/BV4S7sPY/AB-Musical-Armageddon.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-07", 
    "Music, Piano, Singing",
    "Event Description: Gear up for an adrenaline-charged showdown at 'Musical
Armageddon' – the ultimate battle of the bands! Brace yourself for an electrifying
night as bands from across genres unleash their talent, setting the stage ablaze with
performances that will leave you spellbound. With an expert panel of industry judges
and a crowd hungry for rhythm, witness the rise of a new champion in this symphony
of epic beats, exhilarating melodies, and unmatched energy. It's not just a
competition – it's a night where legends are born, and music reigns supreme!",
    25000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846 
     Rhythm Agarwal crescendo@iiitn.ac.in +916260778225",
    "https://unstop.com/competitions/1301050/register",
    "Musical Armageddon : Battle Of Band",
    "2025-02-27 12:00"
);

INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Singers Show-down",
    "Crescendo",
	"https://i.ibb.co/JR6fxxhH/Beats-Barrack.webp",
    "https://i.ibb.co/WWG5XngC/AB-Singers-Showdown.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-03", 
    "Singing,Music",
    "Event Description: Step into the spotlight at Singers Show-down, where solo talents
rise to the occasion in a battle of voices! Prepare to be enthralled as extraordinary
singers take the stage, captivating hearts and minds with their soulful melodies and
electrifying performances. From stirring ballads to powerful pop anthems, this is your
chance to witness raw vocal brilliance and the birth of a new star. Get ready for an
evening brimming with musical magic that will echo long after the final note!",
    15000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846 
     Vaishnavi Newalkar crescendo@iiitn.ac.in +919244262279",
    "https://unstop.com/competitions/1301100/register",
    "Singers Show-down : Solo Singing",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Chord of Chaos",
    "Crescendo",
    "https://i.ibb.co/JR6fxxhH/Beats-Barrack.webp",
    "https://i.ibb.co/WNTty9qq/AB-Chord-of-Chaos.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-03", 
    "Music,Piano",
    "Event Description: Chords of Chaos is a platform for emerging instrumental talents to shine.
    Whether you play the guitar, piano, violin, or any other instrument, showcase your skills in this captivating competition!",
    15000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846 
     Ayush Askar crescendo@iiitn.ac.in+918263062862",
    "https://unstop.com/competitions/1301115/register",
    "Chord of Chaos : Instrumental",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Event_Date_Time)
VALUES (
    "Audience Odyssey: Your Story, Their Choice",
    "Probe",
    "https://i.ibb.co/wNSQZ1FC/AdMads.webp",
    "https://i.ibb.co/C5NQ5jxK/AB-Audience-Odyssey.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-03", 
    "Photography,Dramatics,Story Telling,Writing",
    "Event Details:
Participants will present their short films to a panel of judges and an audience. This unique screening allows the audience to influence the storyline at a pivotal decision point, adding an interactive element to the experience. Showcase your creativity, storytelling skills, and audience engagement in this dynamic final round!",
    25000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846 
     Harsh Ramteke probe@iiitn.ac.in +917498806456",
    "https://unstop.com/competitions/1303161/register",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Rasdhaara",
    "Estoria", 
    "https://i.ibb.co/k6mtvnZD/Aavhan.webp",
    "https://i.ibb.co/twjRZNKR/AB-Ras-Dhaara.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-12", 
    "Dramatics,Poetry,Elocution,Writing,Literary",
    "Short description‬:
‭ Express your creativity in the Rasdhaara, where your words come to life! This‬
‭ competition invites poets to showcase their talent through powerful verses, whether‬
‭ it's a heartfelt message, a thought-provoking theme, or a burst of creativity.‬
‭ With no limits to your imagination, share your unique voice on themes that matter to‬
‭ you. From personal reflections to social commentary, let your poetry captivate and‬
‭ inspire.‬
‭ Join us in this virtual platform, where every line can make an impact. Compete with‬
‭ the best and let your words shine!‬",
   25000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846 
     Om Naik estoria@iiitn.ac.in +919082543449",
    "https://unstop.com/competitions/1303299/register",
    "Rasdhaara : Poetry Writing",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Event_Date_Time)
VALUES (
    "RAP Battle",
    "Crescendo",
    "https://i.ibb.co/JR6fxxhH/Beats-Barrack.webp",
    "https://i.ibb.co/G4T1YFj5/AB-Rap-Battle.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-12", 
    "Music,Singing,Writing",
    "Round 1: Online Submission
Participants must submit a 1-minute rap video.
The video must be a pure one-shot recording, with no edits
Plagiarism is strictly prohibited—only original raps will be accepted.
Based on the submissions, the 10 best rappers will be shortlisted for the next round.‬",
   10000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Team Abhivyakti IIIT Nagpur abhivyakti@iiitn.ac.in +917506103104
     Mayank Raj Gupta bt22cse108@gmail.com +919166165117",
    "https://unstop.com/competitions/1350348/register",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Beats Barrack",
    "Crescendo", 
    "https://i.ibb.co/JR6fxxhH/Beats-Barrack.webp",
    "https://i.ibb.co/20FpXpTD/AB-Beats-Barrack.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-03", 
    "Music,Designing,Piano,Singing",
    "Event Description:
Step into a realm of creativity and innovation with 'Beat Barracks: The Background Score Battle!' Watch as participants wield their musical genius to create captivating background scores live. With the theme revealed on the spot, participants will craft original compositions using cutting-edge music production software, blending artistry with technology.
The top scores will be showcased in our social media content, immortalizing the talent of our champions. Don’t miss this electrifying event where imagination takes center stage and beats forge unforgettable stories!
 Event Format:
Theme Announcement: After registering, participants will be added to a WhatsApp group where the theme for the competition will be shared at the start of the event. This theme will serve as the inspiration for the BGM.
Competition Timeframe: The competition will run for 12 hours from 10 AM to 10 PM. Participants will have this window to complete their BGM composition.
BGM Length: The final BGM composition should be between 1 to 3 minutes BGMs that are shorter or longer will not be accepted.
Final Submission: Participants must submit their completed BGM by the end of the 12-hour time limit. No late submissions will be accepted.‬",
   2000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846
Prakhar Beniwal crescendo@iiitn.ac.in +919602039349",
    "https://unstop.com/competitions/1302560/register",
    "Beats Barrack : 10 Hours BGM Making ",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Bahumukhi",
    "Estoria", 
    "https://i.ibb.co/k6mtvnZD/Aavhan.webp",
    "https://i.ibb.co/mC0ryK0J/AB-Bahumukhi.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-12", 
    "Dramatics,Story Telling,Writing",
    "Short description‬
‭ Step into the spotlight where the stage is yours alone! Bahumukhi is a solo‬ performance competition that celebrates the spirit of individuality in theater. From‬ gripping monologues to breathtaking portrayals, this platform is designed for‬ participants to showcase their versatility, creativity, and storytelling prowess.‬
‭ Whether it’s drama, comedy, or thrill, every performance tells a story—and in‬ Bahumukhi, you are the writer, director, and performer. Be ready to mesmerize the‬ audience with your command over emotions, expressions, and dialogues as you take‬ center stage in this journey of dramatic brilliance.‬
Let your passion shine as you compete with the best and leave an indelible mark on‬ the audience. It's time to step forward and let your talent speak volumes.‬",
   15000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846
Aditi Chandak estoria@iiitn.ac.in +918875070063",
    "https://unstop.com/competitions/1303291/register",
    "Bahumukhi : MonoActing Competition",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Melody Hustle",
    "D-Taraxia",
    "https://i.ibb.co/NgzkSMnr/Dance-Squad.webp",
    "https://i.ibb.co/C3wSwND8/AB-Melody-Hustle.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-12", 
    "Dramatics,Story Telling,Writing",
    "Event Details :
Title : Melody Hustle
Type : Duet
Team Size : 2 Members
Round 1 : Online elimination
Round 2 : Finals
Event Description :
Two dancers, one beat, infinite magic! Melody Hustle is your chance to showcase perfect harmony and
electrifying chemistry. Tell your story through synchronized steps and mesmerizing moves. Grab your
partner and set the stage ablaze. Together, create moments that leave the crowd cheering!",
   20000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846
Sathvika Bogam dtaraxia@iiitn.ac.in +919381469800",
    "https://unstop.com/competitions/1302807/register",
    "Melody Hustle : Duet",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Dahaad",
    "Estoria",
    "https://i.ibb.co/k6mtvnZD/Aavhan.webp",
    "https://i.ibb.co/PsKcg4wP/AB-Dahaad.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-12", 
    "Dramatics,Story Telling,Writing,Arts",
    "I.‬‭ Title‬‭ DAHAAD : Street Play Competition‬
‭ II.‬‭ Type‬‭ Offline‬
‭ III.‬‭ Team Size‬‭ 5-20‬
‭ IV.‬‭ Short description‬
‭ Dahaad is a street play competition that takes theater to the streets, turning open‬ spaces into powerful stages. This event challenges teams to engage audiences with‬ bold performances, strong storytelling, and impactful messages.‬
‭ Focusing on the core of live acting, voice modulation, and real-time audience‬ connection, Dahaad offers a platform to showcase social, cultural, or emotional‬ themes in a relatable and dramatic way. Each performance aims to leave a lasting‬ impression and spark thought-provoking conversations.‬
‭ Step into the heart of the community, where the streets become your stage and the‬ crowd your canvas. Bring stories to life with passion, creativity, and awareness in this‬ exciting street theater experience!‬",
   25000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846
Sandesh Charhate estoria@iiitn.ac.in +919356110217",
    "https://unstop.com/competitions/1303297/register",
    "Dahaad : Street Play Competiton",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Dance Squad",
    "D-Taraxia", 
    "https://i.ibb.co/NgzkSMnr/Dance-Squad.webp",
    "https://i.ibb.co/b5w4qqc1/AB-Dance-Squad.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-12", 
    "Music,Dance,Arts",
    "Title : Dance Squad
Type : Group
Team Size : 3 - 15 members
Round 1 : Online elimination
Round 2 : Finals
Event Description :
Strength in unity, power in moves—welcome to Dance Squad! Showcase your squad’s energy,
coordination, and creativity on stage. Let your formations and flawless grooves captivate the audience.
This is where every step becomes a statement. Bring your squad, own the rhythm, and rule the stage!",
   25000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846
Hanithya Ambidi dtaraxia@iiitn.ac.in +916300882326",
    "https://unstop.com/competitions/1302815/register",
    "Dance Squad : Group Dance",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Event_Date_Time)
VALUES (
    "Mr. & Ms. Abhivyakti",
    "AB Central",
    "NA",
    "https://i.ibb.co/Wpy2M2By/AB-Mr-Ms-Abhivyakti.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-12", 
    "Fashion",
    "Round 1: Online Submission
Participants must submit their 3 best solo photos
Along with the photos, participants must fill out a questionnaire consisting of 3 questions:
Questions will be based on general value systems and perceptions about life.
Based on the submissions, 16 participants (8 boys and 8 girls) will be shortlisted for the next round.",
   10000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Team Abhivyakti IIIT Nagpur abhivyakti@iiitn.ac.in +917506103104
Mayank Raj Gupta bt22cse108@gmail.com +919166165117",
    "https://unstop.com/competitions/1350342/register",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Event_Date_Time)
VALUES (
    "IIITN MUN 3.0",
    "Orator",
    "https://i.ibb.co/4ZbcpHDj/IIITN-MUN.webp",
    "https://i.ibb.co/bg1wk4ZP/AB-MUN-3-0.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-14", 
    "Fashion",
    "Event Details:
Event Name: IIITN MUN 3.0
Organized By: Indian Institute of Information Technology (IIIT), Nagpur
Venue: IIIT Nagpur, Maharashtra, India
Dates: 27th and 28th February 2025

Stages and Timeline:
27th February 2025
Day 1: Inauguration and Debates
Participant registration starts at 8:00 A.M.
Grand opening ceremony at 10:00 A.M.
Committee sessions followed by lunch and networking opportunities.
28th February 2025
Day 2: Closing and Awards
Committee sessions begin at 8:30 A.M.
Breaks for lunch and networking, concluding with a formal closing ceremony and awards distribution.",
   120000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Marketing Team Abhivyakti abhivyakti.marketing@iiitn.ac.in +919822464846
Sanskar Yede orator@iiitn.ac.in +918602527698",
    "https://unstop.com/competitions/1319894/register",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Teaser, Event_Date_Time)
VALUES (
    "Aavahan",
    "Estoria",
    "https://i.ibb.co/k6mtvnZD/Aavhan.webp",
    "https://i.ibb.co/cc3Wnhrb/AB-Aavhan.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-14", 
    "Dramatics,Arts,Literary,Story Telling,Writing",
    "‭ I.‬‭ Title‬‭ AAVAHAN : Stage Play Competition‬
‭ II.‬‭ Type‬‭ Offline‬
‭ III.‬‭ Team Size‬‭ 5-20‬
‭ IV.‬‭ Short description‬:
‭ Step into the spotlight and bring your vision to life in Aavahan! This competition‬ challenges teams to showcase their creativity, acting, and direction through a‬ captivating performance. From gripping narratives to dynamic characters, Aavahan is‬ your chance to impress with your theatrical flair.‬
‭ With every scene, you’ll weave a story that resonates with the audience. Aavahan‬ celebrates teamwork, creativity, and the power of drama, pushing participants to‬ deliver a performance that stays with the audience long after the curtain falls.‬
‭ Compete with the best, and let your imagination run wild. It’s time to step onto the‬ stage and showcase your team’s talent in this thrilling theater experience!‬",
    25000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846
Krish Bawistale estoria@iiitn.ac.in +916268711336",
    "https://unstop.com/competitions/1303293/register",
    "Aavahan: Stage Play Competition",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Event_Date_Time)
VALUES (
    "Photography Challenge",
    "Probe",
    "https://i.ibb.co/wNSQZ1FC/AdMads.webp",
    "https://i.ibb.co/7xh5Mq6d/AB-Photography-Challenge.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-14", 
    "Photography",
    "Introduction:
● Event: A chance to showcase your photography skills and creativity in either
monochrome, astrophotography, or landscape photography.
● Mode: Online
● Dates: 27-28 February 2025
● Venue: Online


Requirements
● Event Type: Individual competition.
● Themes:
○ Monochrome
○ Astrophotography or Landscape Photography
● Submission Limit: Maximum of 1 photograph per theme.
● Originality: All submissions must be original and taken by the participant.
● Editing: Basic editing (color correction, cropping, exposure adjustment) is allowed.Excessive editing or AI-generated content is prohibited.
● File Format: JPEG or PNG format.
● Resolution: Minimum of 1920x1080 pixels.


Rules
● File Naming Format: Photographs must be named as “name_college_theme”.
● Submission Method: Entries must be submitted at probe@iiitn.ac.in in the given format before
the submission deadline.
● Late Submissions: Will not be entertained.
● Judgment: The decision of the judges is final and binding.


Judgment Criteria
● Creativity & Originality: How unique and creative the photograph is.
● Adherence to the Theme: How well the photograph reflects the chosen theme.
● Technical Quality & Composition: Image quality, focus, exposure, and overall
composition.
● Overall Impact: Emotional and visual appeal of the photograph.",
    7500,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Team Abhivyakti IIIT Nagpur abhivyakti@iiitn.ac.in +917506103104",
    "https://unstop.com/competitions/1303181/register",
    "2025-02-27 12:00"
);
INSERT INTO Information (Events, Organisor, Poster_Link, Thumbnail_Link, Main_Event, Status, Last_Update, Field, About_Event, Prize_Pool, Eligibility, Contact_Organisers, Registration_Link, Event_Date_Time)
VALUES (
    "Showstopper",
    "D-Taraxia",
    "https://i.ibb.co/NgzkSMnr/Dance-Squad.webp",
    "https://i.ibb.co/35fqtNbD/AB-Showstopper.png",
    "Abhivyakti 2025", 
    "Online", 
    "2025-02-16", 
    "Dance",
    "Event Details :

Title : Show Stopper

Type : Solo

Round 1 : Online elimination

Round 2 : Finals

Event Description :

Be the star of the night and own the stage at Showstopper!
Let your moves speak louder than words and captivate the audience. It’s your moment to shine, dazzle, and leave everyone spellbound. Dance with passion, grace, and energy that steals the show. Make it unforgettable—be the ultimate Showstopper!",
    18000,
    "Engineering Students, MBA Students, Undergraduate, Postgraduate",
    "Abhivyakti Marketing Team abhivyakti.marketing@iiitn.ac.in +919822464846
Aditi Arya dtaraxia@iiitn.ac.in +917024161222",
    "https://unstop.com/competitions/1302784/register",
    "2025-02-27 12:00"
);

CREATE TABLE Notifications(
Notifications VARCHAR(500));

SELECT * FROM
 Information;
 SELECT * FROM
 Notifications;
 
 UPDATE Information 
SET 
Event_Date_Time = "2025-02-27 12:00"

WHERE Serial_Number = 6;


CREATE TABLE IF NOT EXISTS memory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    query TEXT,
    response TEXT
);
CREATE TABLE Admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL
);
INSERT INTO Admins (email) VALUES ('yashkhedekar31@gmail.com');

CREATE TABLE Gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    thumbnailUrl VARCHAR(255) NOT NULL,
    width INT NOT NULL,
    height INT NOT NULL,
    caption TEXT
);
use eve;
ALTER TABLE Gallery ADD COLUMN userEmail VARCHAR(255) NOT NULL;
select* from Gallery;


ALTER TABLE Gallery DROP COLUMN userEmail;
