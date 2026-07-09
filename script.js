/* ==========================================================================
   DorryHabariSphere- ARCHITECTURE AND INTERACTION SCRIPT
   ========================================================================== */

// Hifadhidata Kuu ya Habari zote 11 zilizopo kwenye Portal
const newsDatabase = {
    1: {
        id: 1,
        category: "Business & Development",
        date: "8 Julai 2026",
        author: "Dorica Ngaleni",
        image: "images/sabasaba.jpg",
        title: "Tanzania Yalenga Kuimarisha Uwekezaji Kupitia Fursa za Biashara za Kimataifa",
        paragraphs: [
            "Tanzania imeendelea kutumia Maonesho ya Kimataifa ya Biashara Dar es Salaam maarufu kama Sabasaba kama jukwaa la kukuza biashara, uwekezaji na kuonyesha fursa mbalimbali za kiuchumi kwa wawekezaji wa ndani na nje ya nchi.",
            "Katika maonyesho ya mwaka huu, serikali imeweka bayana mikakati mipya ya kuboresha sera za kifedha na kikodi ili kuwavutia wawekezaji wengi wakubwa duniani kuweka mitaji yao nchini, hasa katika maeneo ya viwanda vya kuchakata bidhaa.",
            "Waziri wa Viwanda na Biashara amebainisha kuwa nchi inajipanga kuwa kitovu kikuu cha biashara kwa ukanda mzima wa Afrika Mashariki na Kati kwa kutumia miundombinu ya kisasa ya reli ya SGR na upanuzi wa bandari ya Dar es Salaam.",
            "Wafanyabiashara wa ndani wameshauriwa kuchamkia fursa za ubia na mashirika ya kigeni ili kuongeza thamani ya bidhaa zao na kukua kiteknolojia, jambo litakalosaidia kutatua changamoto za masoko ya nje.",
            "Mbali na sekta ya uzalishaji, maonyesho hayo yameangazia pia fursa zilizopo katika kilimo cha kisasa na nishati jadidifu, sekta ambazo zinatajwa kuwa nguzo kuu ya uchumi endelevu wa baadae nchini Tanzania.",
            "Wadau wa uchumi wamepongeza juhudi hizi na kusisitiza kuwa uratibu mzuri kati ya sekta binafsi na sekta ya umma utaleta mapinduzi makubwa na ya haraka ya kimaendeleo kwa wananchi wote wa mikoa mbalimbali."
        ]
    },
    2: {
        id: 2,
        category: "National Security",
        date: "7 Julai 2026",
        author: "Dorica Ngaleni",
        image: "images/security.jpg",
        title: "Ulinzi Waimarishwa Kulinda Amani na Usalama Nchini",
        paragraphs: [
            "Vyombo vya ulinzi na usalama nchini vimetangaza kuimarisha mifumo yake ya doria na ulinzi wa mipaka yote ili kuhakikisha kuwa nchi inabaki kuwa kisiwa cha amani na utulivu wakati wote.",
            "Mkuu wa majeshi ameeleza kuwa mikakati mipya imewekwa ili kukabiliana na makosa ya kimtandao pamoja na uhalifu wowote unaovuka mipaka, kwa kutumia teknolojia ya kisasa ya ujasusi wa kidijitali.",
            "Ushirikiano wa karibu kati ya wananchi na jeshi la polisi kupitia dhana ya ulinzi shirikishi umetajwa kuwa nguzo kubwa inayosaidia kubaini mapema viashiria vya uvunjifu wa amani katika jamii.",
            "Mikoa yote mipakani imeongezewa vifaa na watendaji makini ili kudhibiti uingiaji haramu wa watu na bidhaa ambazo zinaweza kuathiri uchumi na usalama wa ndani wa Jamhuri ya Muungano.",
            "Serikali imetoa wito kwa vijana kujiepusha na makundi yenye itikadi kali na badala yake wajikite katika uzalishaji mali na kutumia fursa za ajira zinazotengenezwa na nchi kujiendeleza.",
            "Wataalamu wa masuala ya usalama wa kimataifa wameipongeza Tanzania kwa kuendelea kuwa mfano bora wa nchi yenye utulivu wa kisiasa na usalama thabiti katika ukanda wa maziwa makuu."
        ]
    },
    3: {
        id: 3,
        category: "Technology",
        date: "5 Julai 2026",
        author: "Dorica Ngaleni",
        image: "images/technology.jpg",
        title: "Serikali Yaendelea Kuboresha Huduma za Kidijitali kwa Wananchi",
        paragraphs: [
            "Serikali kupitia Wizara ya Habari na Teknolojia ya Mawasiliano imeanzisha mifumo mipya ya kidijitali inayolenga kurahisisha na kuharakisha utoaji wa huduma za kijamii kwa wananchi wake.",
            "Mifumo hii mipya iliyounganishwa kwenye mfumo mkuu wa serikali mtandao (e-Government) itawawezesha wananchi kuomba nyaraka muhimu kama pasi za kusafiria, leseni na vyeti bila usumbufu.",
            "Uboreshaji huu unatarajiwa kupunguza kwa kiasi kikubwa urasimu uliokuwa unajitokeza awali katika ofisi za umma na hivyo kuongeza uwazi na kudhibiti upotevu wa mapato ya serikali.",
            "Mkurugenzi wa teknolojia ameeleza kuwa vituo maalum vya huduma kwa wateja kidijitali vimeshaanza kujengwa katika wilaya zote nchini ili kuwasaidia wale wasio na uelewa mkubwa wa kompyuta.",
            "Pia, miundombinu ya mkongo wa taifa wa mawasiliano inazidi kusambazwa hadi maeneo ya vijijini ili kuhakikisha kuwa huduma za intaneti ya kasi inapatikana kwa bei nafuu nchini kote.",
            "Wadau wa sekta ya teknolojia wameeleza kuwa mapinduzi haya ya kidijitali ni hatua muhimu itakayoifanya Tanzania kuwa na uchumi wa kidijitali unaoshindana kikamilifu kimataifa."
        ]
    },
    4: {
        id: 4,
        category: "National",
        date: "27 Juni 2026",
        author: "Dorica Ngaleni",
        image: "images/umeme.jpg",
        title: "Umeme Wakatika Katika Mikoa Mingi Tanzania, Shughuli Za Kiuchumi Zasimama kwa Muda",
        paragraphs: [
            "Hitilafu kubwa iliyotokea kwenye gridi ya taifa imesababisha kukatika kwa huduma ya nishati ya umeme katika mikoa mingi ya Tanzania na kuathiri shughuli mbalimbali za kimaendeleo.",
            "Maeneo yaliyoathirika zaidi ni pamoja na miji mikuu ya kibiashara ambapo viwanda vingi viliacha uzalishaji kwa saa kadhaa na kusababisha hasara za kifedha kwa wafanyabiashara.",
            "Shirika la usambazaji umeme nchini (TANESCO) limetoa taarifa rasmi likieleza kuwa mafundi wake wakuu wapo kazini usiku na mchana ili kurekebisha hitilafu hiyo iliyotokea kwenye mitambo mikuu.",
            "Mkurugenzi wa shirika hilo amewaomba radhi wananchi kwa usumbufu uliojitokeza na kubainisha kuwa mifumo ya dharura inaimarishwa ili kuzuia kukatika kwa umeme kwa kiwango kikubwa namna hiyo baadae.",
            "Hospitali na taasisi muhimu za kutoa huduma za dharura zilishauriwa kutumia mifumo yao ya majenereta ya ndani ili kuhakikisha kuwa huduma za afya kwa wagonjwa hazisimami.",
            "Hadi kufikia jioni ya leo, baadhi ya mikoa imeshaanza kupata nishati hiyo huku mafundi wakiendelea kukamilisha matengenezo kwenye maeneo machache yaliyosalia."
        ]
    },
    5: {
        id: 5,
        category: "Sports",
        date: "20 Juni 2026",
        author: "Dorica Ngaleni",
        image: "images/yanga.jpg",
        title: "Yanga SC Yafanya Maandalizi Kabla ya Msimu Mpya wa Mashindano",
        paragraphs: [
            "Klabu ya soka ya Yanga SC imeingia rasmi kambini kuanza maandalizi makito kuelekea msimu mpya wa ligi kuu na mashindano makubwa ya klabu bingwa barani Afrika.",
            "Kocha mkuu wa timu hiyo ameeleza kuwa wamepanga kufanya mechi kadhaa za kirafiki za kimataifa ili kupima viwango vya wachezaji wapya waliosajiliwa hivi karibuni kuimarisha kikosi.",
            "Uongozi wa klabu umeweka wazi kuwa lengo kuu la msimu huu si tu kutetea ubingwa wa ndani, bali ni kufika hatua ya fainali ya michuano ya kimataifa ili kuweka historia mpya.",
            "Mashabiki wa timu hiyo wameonyesha kujazwa na matumaini makubwa kutokana na usajili wa kimkakati uliofanywa na benchi la ufundi, wakiamini kikosi cha mwaka huu kimekamilika.",
            "Wachezaji wote wakuu wameripotiwa kuwa na ari na afya njema, huku wakifanya mazoezi ya nguvu ya utafutaji utimamu wa mwili chini ya uangalizi wa madaktari wa timu.",
            "Klabu inatarajia kuzindua jezi mpya za msimu pamoja na tamasha kubwa la kila mwaka ambalo hukusanya maelfu ya wapenzi wa soka nchini kushuhudia kikosi kizima."
        ]
    },
    6: {
        id: 6,
        category: "Artificial Intelligence",
        date: "15 Mei 2026",
        author: "Dorica Ngaleni",
        image: "images/ai.jpg",
        title: "Artificial Intelligence Yabadilisha Sekta ya Habari Katika Enzi ya Kidijitali",
        paragraphs: [
            "Ukuaji wa kasi wa teknolojia ya Artificial Intelligence (AI) umeripotiwa kuleta mabadiliko makubwa sana katika mifumo ya uzalishaji na usambazaji wa habari duniani.",
            "Vyumba vingi vya habari vya kisasa vimeanza kutumia programu za kijasusi kusaidia katika kutafsiri lugha, kuchambua data kubwa za kitafiti na hata kuandika muhtasari wa haraka.",
            "Hata hivyo, wataalamu wa uandishi wa habari wamebainisha kuwa matumizi ya AI yanapaswa kuendeshwa kwa umakini mkubwa ili kulinda maadili na usahihi wa habari zinazofikishwa kwa jamii.",
            "Changamoto ya kuenea kwa habari za uongo (Deepfakes) imetajwa kuwa tishio kubwa linalohitaji mifumo thabiti ya udhibiti na uhakiki wa habari kabla hazijachapishwa mtandaoni.",
            "Waandishi wa habari nchini wamehimizwa kujifunza na kujasudia matumizi ya zana hizi mpya ili wasiachwe nyuma na kasi ya soko la kidijitali la tasnia ya habari ulimwenguni.",
            "Licha ya uwezo mkubwa wa AI, wadau wote wanakubaliana kuwa hisia na uchambuzi wa kina wa kibinadamu bado ni vitu visivyoweza kubadilishwa kikamilifu na mashine yoyote."
        ]
    },
    7: {
        id: 7,
        category: "Health",
        date: "18 Aprili 2026",
        author: "Dorica Ngaleni",
        image: "images/health.jpg",
        title: "Wataalamu Wahimiza Uchunguzi wa Afya Mara kwa Mara",
        paragraphs: [
            "Wizara ya Afya pamoja na jumuia ya madaktari nchini wametoa wito mzito kwa jamii kujenga utamaduni endelevu wa kufanya uchunguzi wa afya mara kwa mara.",
            "Uchunguzi wa mapema umetajwa kuwa kinga na silaha kuu dhidi ya magonjwa yasiyoambukiza kama vile kisukari, shinikizo la juu la damu na saratani mbalimbali.",
            "Gharama za kutibu magonjwa yaliyofikia hatua kubwa zimekuwa zikizidhoofisha familia nyingi kiuchumi, jambo ambalo linaweza kuepukika kwa kufanya vipimo mapema.",
            "Vituo vya afya vya serikali vimeshushwa bei ya vipimo vya msingi ili kutoa fursa kwa wananchi wa hali ya chini kumudu na kufahamu hali zao za afya kila robo au nusu mwaka.",
            "Elimu kuhusu lishe bora, kufanya mazoezi na kuepuka matumizi ya tumbaku na vileo vya kupitiliza imeendelea kutolewa shuleni na kwenye mikusanyiko ya kijamii.",
            "Jamii imepokea kwa mwamko mzuri ushauri huo, huku kukiwa na ongezeko kubwa la watu wanaotembelea kliniki za ushauri wa afya kote nchini kwa sasa."
        ]
    },
    8: {
        id: 8,
        category: "Education",
        date: "10 Machi 2026",
        author: "Dorica Ngaleni",
        image: "images/education.jpg",
        title: "Vyuo Vyatumia Zaidi Mifumo ya Kujifunza Mtandaoni",
        paragraphs: [
            "Vyuo vikuu na taasisi za elimu ya juu nchini Tanzania vimepiga hatua kubwa kwa kuongeza matumizi ya mifumo ya kidijitali na majukwaa ya kujifunzia kupitia mtandao.",
            "Mfumo huu unaoruhusu wanafunzi kusoma wakiwa popote (E-Learning) umesaidia kupunguza msongamano wa wanafunzi madarasani na kuongeza nafasi za udahili vyuoni.",
            "Wahadhiri wameeleza kuwa majukwaa haya yanarahisisha ugawaji wa vifaa vya kujifunzia, kufanya majaribio na kutoa matokeo kwa haraka na kwa njia ya uwazi zaidi.",
            "Hata hivyo, changamoto ya upatikanaji wa vifaa kama kompyuta mpakato na changamoto ya bando la intaneti kwa baadhi ya wanafunzi bado inafanyiwa kazi na mamlaka husika.",
            "Serikali inafanya mazungumzo na kampuni za simu ili kutoa vifurushi maalum vya bei nafuu sana kwa ajili ya wanafunzi wanapofungua tovuti za kimasomo za vyuo vyao.",
            "Mabadiliko haya ya kielimu yanatajwa kuwa msingi imara wa kuandaa kizazi chenye ujuzi wa kidijitali kinachoweza kufanya kazi na kushindana katika soko la kimataifa."
        ]
    },
    9: {
        id: 9,
        category: "Entertainment",
        date: "24 Februari 2026",
        author: "Dorica Ngaleni",
        image: "images/entertainment.jpg",
        title: "Sekta ya Burudani Tanzania Yazidi Kukua Kupitia Wasanii Chipukizi",
        paragraphs: [
            "Sekta ya burudani na sanaa nchini Tanzania imeshuhudia ukuaji mkubwa sana katika robo ya kwanza ya mwaka huu, huku wasanii chipukizi wakiongoza mapinduzi hayo.",
            "Kupitia majukwaa ya kusambaza muziki na video mtandaoni, kazi za wasanii wetu zimevuka mipaka na kuanza kushika chati kubwa za kimataifa barani Afrika na Ulaya.",
            "Serikali imeweka wazi kuwa inazidi kuweka mazingira mazuri ya kulinda hakimiliki za wasanii ili kuhakikisha wananufaika kifedha kutokana na kazi za jasho lao.",
            "Matamasha makubwa ya utamaduni na sanaa yamekuwa yakifanyika katika mikoa mbalimbali, jambo linalofungua fursa za ajira kwa vijana wengi nyuma ya jukwaa.",
            "Wadau wa sanaa wamewasihi wasanii wapya kuwekeza kwenye uandishi mzuri wa maudhui na maadili ili kulinda sanaa ya nchi na kudumu kwenye ushindani kwa muda mrefu.",
            "Sanaa inatajwa kuwa moja ya sekta zinazoongoza kwa kuwapatia vijana kipato cha haraka na kutangaza utalii wa utamaduni wa Tanzania duniani kote."
        ]
    },
    10: {
        id: 10,
        category: "Politics",
        date: "12 Januari 2026",
        author: "Dorica Ngaleni",
        image: "images/politics.jpg",
        title: "Wanasiasa Wahimiza Ushiriki wa Wananchi Katika Masuala ya Kitaifa",
        paragraphs: [
            "Viongozi mbalimbali wa kisiasa nchini wametoa wito kwa wananchi kujitokeza kwa wingi kushiriki katika vikao vya maamuzi ya kimaendeleo katika ngazi za vijiji na kata.",
            "Ushiriki wa wananchi umetajwa kuwa nguzo kuu ya demokrasia na husaidia kuhakikisha kuwa miradi inayotekelezwa inakidhi mahitaji halisi ya jamii husika.",
            "Katika mikutano yao, wanasiasa wamesisitiza umuhimu wa kuweka pembeni tofauti za kiitikadi na kushirikiana kwa pamoja kujenga taifa imara kiuchumi na kijamii.",
            "Miongozo mipya ya serikali za mitaa inalenga kuongeza uwazi katika matumizi ya fedha za umma zinazopelekwa kwenye miradi ya maji, barabara na vituo vya afya.",
            "Wananchi wamehimizwa kuhoji na kufuatilia utekelezaji wa ahadi zilizotolewa na viongozi wao ili kuleta uwajibikaji wa kweli kwa maendeleo ya haraka ya jamii.",
            "Mwamko wa wananchi unazidi kuonekana kukua kwa sasa, huku mahudhurio kwenye mikutano ya hadhara yakiongezeka kwa kiasi kikubwa sehemu mbalimbali."
        ]
    },
    11: {
        id: 11,
        category: "Society",
        date: "5 Januari 2026",
        author: "Dorica Ngaleni",
        image: "images/society.jpg",
        title: "Jamii Yaendelea Kushirikiana Kutatua Changamoto za Kijamii",
        paragraphs: [
            "Mshikamano mkubwa umeendelea kushuhudiwa katika jamii mbalimbali nchini ambapo wananchi wamekuwa wakichanga nguvu zao kutatua kero za miundombinu mitaani.",
            "Kupitia kampeni za kujitolea, wananchi wamefanikiwa kujenga madaraja madogo, kusafisha mitaro na kukarabati majengo ya shule yaliyokuwa yamechakaa.",
            "Viongozi wa kimila na kidini wamepongeza juhudi hizi na kueleza kuwa maendeleo ya kweli yanaanzia kwa wananchi wenyewe kabla ya kusubiri msaada kutoka nje.",
            "Mifuko ya maendeleo ya jimbo nayo imekuwa ikichangia vifaa vya ujenzi kama saruji na mabati kuunga mkono juhudi hizo zinazoanzishwa na nguvu za wananchi.",
            "Hali hii inajenga ari ya umiliki wa miradi hiyo na kuzuia uharibifu wa makusudi wa miundombinu ya umma kwa kuwa wananchi wanajua thamani ya michango yao.",
            "Harakati hizi za kijamii zinatarajiwa kuendelea kushika kasi nchini kote kama mfano thabiti wa jinsi mضikamano unavyoweza kuleta mabadiliko chanya ya haraka."
        ]
    }
};

// Logic ya Kurun kurasa tofauti pindi zinapofunguka kwenye kivinjari (Browser)
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ZALISHA HABARI KWENYE HOMEPAGE (index.html)
    const mainNewsContainer = document.getElementById("main-news-container");
    if (mainNewsContainer) {
        mainNewsContainer.innerHTML = ""; // Kusafisha eneo
        
        Object.values(newsDatabase).forEach(news => {
            // Tengeneza muhtasari mfupi (preview)
            const shortPreview = news.paragraphs[0].substring(0, 160) + "...";
            
            const cardHtml = `
                <div class="col-md-12 col-lg-6">
                    <div class="card news-card h-100 shadow-sm">
                        <span class="category-badge">${news.category}</span>
                        <div class="card-img-container">
                            <img src="${news.image}" alt="${news.title}">
                        </div>
                        <div class="card-body d-flex flex-column">
                            <div class="news-meta">
                                <span><i class="bi bi-calendar3"></i> ${news.date}</span>
                                <span class="ms-2">| <i class="bi bi-person"></i> ${news.author}</span>
                            </div>
                            <h4 class="card-news-title">
                                <a href="news-details.html?id=${news.id}">${news.title}</a>
                            </h4>
                            <p class="news-preview flex-grow-1">${shortPreview}</p>
                            <div class="mt-3">
                                <a href="news-details.html?id=${news.id}" class="btn btn-readmore w-100 text-center">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            mainNewsContainer.innerHTML += cardHtml;
        });
    }

    // 2. ZALISHA HABARI SEHEMU YA MAELEZO (news-details.html)
    const detailsContainer = document.getElementById("news-details-content");
    if (detailsContainer) {
        // Soma ID ya habari kutoka kwenye URL query (mfano: ?id=1)
        const urlParams = new URLSearchParams(window.location.search);
        const newsId = parseInt(urlParams.get('id')) || 1; // Kama hakuna ID, fungua ya 1 kma default
        
        const currentNews = newsDatabase[newsId];
        
        if (currentNews) {
            // Badilisha Browser Title
            document.title = `${currentNews.title} - DorryHabari Sphere`;
            
            // Jaza aya zote za habari husika
            let paragraphHtml = "";
            currentNews.paragraphs.forEach(p => {
                paragraphHtml += `<p class="fs-5 line-height-lg mb-4 text-secondary" style="text-align: justify;">${p}</p>`;
            });
            
            detailsContainer.innerHTML = `
                <span class="badge bg-primary text-uppercase mb-3 px-3 py-2 fw-bold" style="background-color: #0056b3 !important;">${currentNews.category}</span>
                <h1 class="display-5 fw-bold mb-3 text-dark">${currentNews.title}</h1>
                
                <div class="news-meta fs-6 border-top border-bottom py-2 mb-4 d-flex flex-wrap gap-3">
                    <span><i class="bi bi-calendar3"></i> <strong>Tarehe:</strong> ${currentNews.date}</span>
                    <span>| <i class="bi bi-person"></i> <strong>Mwandishi:</strong> ${currentNews.author}</span>
                </div>
                
                <div class="mb-4 rounded shadow-sm overflow-hidden" style="max-height: 500px;">
                    <img src="${currentNews.image}" alt="${currentNews.title}" class="w-100 h-100 object-fit-cover">
                </div>
                
                <div class="news-full-text">
                    ${paragraphHtml}
                </div>
            `;
        } else {
            detailsContainer.innerHTML = `<div class="alert alert-danger">Habari uliyochagua haipatikani kwenye mfumo wetu kwa sasa.</div>`;
        }
    }

    // 3. ZALISHA WIDGETS ZA SIDEBAR KWENYE UKURASA UNAOHUSIKA
    const trendingContainer = document.getElementById("sidebar-trending");
    const mostReadContainer = document.getElementById("sidebar-mostread");
    const otherNewsContainer = document.getElementById("sidebar-other");

    if (trendingContainer) {
        // Habari 1, 2, 5 kama Trending
        [1, 2, 5].forEach(id => {
            const n = newsDatabase[id];
            if(n) trendingContainer.innerHTML += sidebarItemTemplate(n);
        });
    }
    if (mostReadContainer) {
        // Habari 3, 4, 6 kama Most Read
        [3, 4, 6].forEach(id => {
            const n = newsDatabase[id];
            if(n) mostReadContainer.innerHTML += sidebarItemTemplate(n);
        });
    }
    if (otherNewsContainer) {
        // Habari 7, 8, 9, 10, 11 kama Habari Nyingine
        [7, 8, 9, 10, 11].forEach(id => {
            const n = newsDatabase[id];
            if(n) otherNewsContainer.innerHTML += sidebarItemTemplate(n);
        });
    }

    function sidebarItemTemplate(news) {
        return `
            <a href="news-details.html?id=${news.id}" class="sidebar-list-item">
                <div class="sidebar-item-title">${news.title}</div>
                <div class="sidebar-item-meta"><i class="bi bi-calendar3"></i> ${news.date}</div>
            </a>
        `;
    }
});
