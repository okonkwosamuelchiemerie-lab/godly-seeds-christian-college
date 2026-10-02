/* Edit this file to change staff, news, events and gallery content. Set img:"assets/yourfile.jpg" to use a real photo. */
function ph(label,hue,size){size=size||400;return "data:image/svg+xml;utf8,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='"+size+"' height='"+size+"'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl("+hue+",55%,35%)'/><stop offset='1' stop-color='hsl("+(hue+30)+",60%,55%)'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><text x='50%' y='54%' font-family='Georgia' font-size='"+size/5+"' fill='white' text-anchor='middle'>"+label+"</text></svg>")}
const STAFF=[
{name:"Mrs. Grace Adeyemi",role:"Principal",subject:"Leadership"},
{name:"Mr. Daniel Okoro",role:"Vice Principal",subject:"Mathematics"},
{name:"Mrs. Ruth Bello",role:"Head of Sciences",subject:"Biology"},
{name:"Mr. Samuel Eze",role:"Head of Arts",subject:"Literature in English"},
{name:"Miss Esther Musa",role:"Teacher",subject:"English Language"},
{name:"Mr. Paul Ibrahim",role:"Teacher",subject:"Physics"},
{name:"Mrs. Joy Nnamdi",role:"Teacher",subject:"Chemistry"},
{name:"Mr. Isaac Danjuma",role:"ICT Instructor",subject:"Computer Studies"},
{name:"Mrs. Mary Olu",role:"Guidance Counsellor",subject:"Christian Religious Studies"}];
STAFF.forEach((s,i)=>s.img=ph(s.name.split(" ").slice(-2).map(w=>w[0]).join(""),215+i*12,300));
const NEWS=[
{t:"Admissions open for the new session",c:"Announcements",d:"2026-09-20",x:"Parents can now collect forms or apply online for Junior and Senior classes.",img:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"},
{t:"Students win inter-school science fair",c:"Achievements",d:"2026-09-12",x:"Our SS2 team took first place with a water purification project.",img:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80"},
{t:"Annual inter-house sports day",c:"Events",d:"2026-09-05",x:"Four houses competed in track, field and team games, with Blue House taking the cup.",img:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"},
{t:"New computer laboratory commissioned",c:"Announcements",d:"2026-08-28",x:"Thirty new workstations now support practical ICT lessons.",img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"},
{t:"Choir sweeps regional praise festival",c:"Achievements",d:"2026-08-15",x:"The school choir placed first in the regional Christian schools festival.",img:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"},
{t:"Career day brings professionals to campus",c:"Events",d:"2026-08-02",x:"Doctors, engineers and lawyers spoke to senior students about their careers.",img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"}];
const EVENTS=[
{d:"14",m:"OCT",t:"First term PTA meeting",p:"School Hall, 10:00 AM",img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=240&q=80"},
{d:"28",m:"OCT",t:"Mid-term break begins",p:"All classes",img:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=240&q=80"},
{d:"12",m:"NOV",t:"Entrance examination",p:"Main Block, 9:00 AM",img:"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=240&q=80"},
{d:"05",m:"DEC",t:"Carol and Awards Night",p:"School Hall, 4:00 PM",img:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=240&q=80"}];
const GAL=[
{t:"Assembly",c:"Campus",img:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"},
{t:"Main Block",c:"Campus",img:"https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85"},
{t:"Playground",c:"Campus",img:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85"},
{t:"Science Lab",c:"Classes",img:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85"},
{t:"ICT Lab",c:"Classes",img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"},
{t:"Library",c:"Classes",img:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85"},
{t:"Sports Day",c:"Events",img:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85"},
{t:"Choir",c:"Events",img:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85"},
{t:"Graduation",c:"Events",img:"https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=85"},
{t:"Football",c:"Sports",img:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85"},
{t:"Relay Race",c:"Sports",img:"https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85"},
{t:"Volleyball",c:"Sports",img:"https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&w=1000&q=85"}
];
