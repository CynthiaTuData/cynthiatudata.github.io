let opening_text = 
'<div><p>By July 22, all but 40 families complied with the order. The remaining pled in court to have their deadline extended, while the sounds of construction were ringing in their ears.</p></div>'

let text_1 = 
'<div><p>After the notice was served on his business, 96-year-old Thomas W. Munkenbeck hustled around town to seek a new location for his pipe and ship fitting shop. He had worked in his shop for 74 years–until one of the air shafts for the highway tunnel was set to be put right on the site.</p>' +
'<p>“He suddenly became ill,” said his son Earl Mukenbeck, who ran the business with elder Munkenbeck, according to the Brooklyn Daily Eagle. The son showed up at Brooklyn Supreme Court in place of his father. The court granted them until December to leave the premises.</p></div>'

let text_2 = ''

let text_3 = "<div><p>When insepectors stepped into Mr.Berggren's machine shop to examine the condition, 'machines, lathes and drills, weighing hundreds of pounds, were still whirling.' Berggren appealed for an extension as he struggled to have the power installed at the new site.</p></div>"

let text_4 = '<div><p>Between 2nd Avenue and 3rd Avenue, the entire block north of Hamilton Avenue were demolished.</p> <p>One of the tenants, Mary E. Feeney, had lived in the tenament on 5 16St for 50 years. She was premitted to vacate her home by August 5th— two weeks after the deadline.</p></div>'

let text_5 ='<div><img id="video" src="media/banner-vid.gif"style="filter: drop-shadow(0 0 0.1rem black);"><figcaption>MTA Bridges & Tunnels Special Archive</figcaption><p>Along Hamilton Avenue, about 1,000 residents were evicted, and some 400 dwellings were razed to make way for the incoming highway.</p></div>'

let text_6 = '<p>Among the displaced were about 100 welfare tenants, police officers, bakers, bar and grill owners, local metal works shop that served the waterfront for decades, and a beloved local restaurant known as the “Roast Beef King.”</p><img src="media/sanborn-map.png"/><figcaption style="margin-left: 18vw">1939 Sanborn Fire Insurance Map. Source: Library of Congress<br>Visualization: Cynthia Tu</figcaption><p>Hamilton Avenue was the artery of the buzzing neighborhood of Red Hook. Since the Dutch colonists arrived at the waterfront area in South Brooklyn in the 1600s, Red Hook had been a vibrant immigrant enclave. A diverse mix of ethnic groups: Dutch, Norwegians, Italians, Puerto Ricans, and Blacks (both enslaved people brought over by the Dutch, and free Blacks who fled the South) have called Red Hook their home.</p>'+
'<p>From the 1840s into the 20th Century, Red Hook bustled with fishermen, dockworkers, sailors, and shop owners who visited, worked, or lived on the waterfront.</p>'+ 
"<p>“Think of it as a maritime Times Square,” wrote Carolina Salguero, founder of Red Hook Waterfront Stories.</p><p>Yet, Red Hook soon lost its glory due to the city’s planning policies. In the eyes of the federal government, Red Hook was one of the least desirable neighborhoods in New York City.</p><br>"+
'<h3>A RED LINE, FROM THE MAP TO THE GROUND</h3>'+
'<p>When the Great Depression hit in 1929, foreclosures swept across cities in America. In hopes of reinforcing better real estate practices, the federal government established the Home Owners Loan Corporation (HOLC), an agency that appraised neighborhoods across the country. In the 1930s, HOLC created a series of maps that assess lending risk in different neighborhoods. Neighborhoods were classified into four grades: "<span style="background-color: #85d364">best</span>," "<span style="background-color: #79b2e6">desirable</span>,” “<span style="background-color:#e6b22d">declining</span>,” and “<span style="background-color: #dd5f5f">hazardous</span>.”</p>'+
'<p>The HOLC report of Red Hook reads:</p>'+'<p id="holc">Population: <strong>35% foreign-born families, predominately Irish-Italian-Scandinavian.</strong><br>Occupation: <strong>unskilled labor</strong><br><br>Detrimental Influences: <strong>...Mixed races. "Red Hook" and "Gowanus Canal" sections have been slum-type areas for many years...</strong><br>Favorable Influences: <span style="color:brown"><strong>Proposed Hamilton Avenue tunnel to the Battery in Manhattan.</strong></span></p>'

let text_7='<div><p>Red Hook was marked as “hazardous” and thus <span style="background-color: #dd5f5f">colored in red</span>.</p></div>'

let text_8 ='<p>These documents, now known as the “redlining” maps, would dictate America’s urban planning policies, resulting in economic inequality and residential segregation.</p>'+

"<p>“It's crystal clear the role that race,and on a highly lesser extent, ethnicity plays in it,” said Dr. Rober Nelson, director of America Panorama: An Atlas of United States History at the University of Richmond. “You did have this hierarchy of ethnic populations, and they’re not all treated the same.” <p/>" +

"<p>Take European immigrant communities as an example. Nelson explained that HOLC tended to give higher grades to immigrant communities coming from Western and Protestant Europe, while Eastern and Southern Europe or Catholic countries tend to receive lower grades. Black neighborhoods were also redlined regardless of their socioeconomic status.</p>"+

"<p>“We think about redlining as a form of divestment,” Nelson said. “What we see is that divestment in residential housing, and in all kinds of infrastructure improves the quality of life, but they often see a fair amount of investment in things like highways, interstates, and infrastructure that is often compromising the quality of life.”</p>"

let text_9 = '<div><p>In and around New York City, Robert Moses led the construction of more than 600 miles of highways.</p> <p>During Moses’ 40-year reign as New York City’s “Master Builder,” an estimated 250,000 people were displaced according to “The Power Broker,” a Pulitzer-winning biography of Moses written by Robert Caro.</p><br><p>HOLC Grade: <span style="background-color: #85d364">best</span>, <span style="background-color: #79b2e6">desirable</span>, <span style="background-color:#e6b22d">declining</span>, <span style="background-color: #dd5f5f">hazardous</span></p></div>'

let text_10 ='<div><p>In his book, Caro noted that the BQE goes around wealthier neighborhoods such as <span style="background-color: #79b2e6">Brooklyn Heights<span>.</p></div>'

let text_11 = '<div><p>Yet its route cuts through lower-graded neighborhoods like <span style="background-color: #dd5f5f">Red Hook</span> and <span style="background-color: #e6b22d">Sunset Park</span>.</p></div>'


var config = {
    style: 'mapbox://styles/cynthia-tu/clkd0b686004401qf485j25gy',
    accessToken: 'pk.eyJ1IjoiY3ludGhpYS10dSIsImEiOiJjbGJuMXRsNG0wbmJ1M3BueWljMjI1OThwIn0.CnI2WmMovbVKWSJ1lfvX7A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    chapters: [
        {
            id: 'map-opening',
            alignment: 'center',
            hidden: false,
            // title: 'Display Title',
            // image: './path/to/image/source.png',
            chapterDiv: opening_text,
            location: {
                center: [-74.001949, 40.677282],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'highway1',
                    opacity: 1,
                    duration:1000
                    },
                    {
                        layer: 'highway2',
                        opacity: 1,
                        duration:1000
                        },
                        {
                            layer: 'highway3',
                            opacity: 1,
                            duration:1000
                            },

            ],
            onChapterExit: [            {
                layer: 'highway1',
                opacity: 0
                },
                {
                    layer: 'highway2',
                    opacity: 0
                    },
                    {
                        layer: 'highway3',
                        opacity: 0
                        },

            ]
        },
        {
            id: 'step1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'media/munkenbeck.png',
            chapterDiv: text_1,
            location: {
                center: [-74.006232, 40.683692],
                zoom: 21.39,
                pitch: 77.21,
                bearing: 33.01,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        {
            id: 'step2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'media/igoe.png',
            chapterDiv: text_2,
            location: {
                center: [-74.002418, 40.677019],
                zoom: 20,
                pitch: 80,
                bearing: -24.8,
                speed: 1, // make the flying slow
                curve: 1, 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'step3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'media/berggren.png',
            chapterDiv: text_3,
            location: {
                center: [-73.997824, 40.670022],
                zoom: 20,
                pitch: 80,
                bearing: -95,
                speed: 1, // make the flying slow
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'step4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'media/16st.png',
            chapterDiv: text_4,
            location: {
                center: [-73.995479, 40.668831],
                zoom: 18,
                pitch: 90,
                bearing: 12.78,
                speed: 1, // make the flying slow
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'step5',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            chapterDiv: text_5,
            location: {
                center: [-74.002108, 40.671373],
                zoom: 14.69,
                pitch: 62,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'full-page',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            chapterDiv: text_6,
            location: {
                // center: [-74.002108, 40.671373],
                // zoom: 14.69,
                // pitch: 62,
                // bearing: 0,
                // speed: 1, // make the flying slow
                // curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'redline',
            opacity: 0}],
            onChapterExit: []
        },
        {
            id: 'step7',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            chapterDiv: text_7,
            location: {
                center: [-74.001949, 40.677282],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'redline',
                opacity: 0.7,
                duration: 1000
            }],
            onChapterExit: []
        },
        {
            id: 'full-page-2',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            chapterDiv: text_8,
            location: {
                center: [-74.001949, 40.677282],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'redline',
                opacity: 0.7,
                duration: 5000
            }],
            onChapterExit: []
        },
        {
            id: 'step9',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            chapterDiv: text_9,
            location: {
                center: [-73.958831, 40.711141],
                zoom: 10.90,
                pitch: 0,
                bearing: 9,
                speed: 1, // make the flying slow
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'redline',
                opacity: 0.7,
                duration: 5000
            },
                {
                    layer: 'highway1',
                    opacity: 1,
                    duration:5000
                    },
                    {
                        layer: 'highway2',
                        opacity: 1,
                        duration:5000
                        },
                        {
                            layer: 'highway3',
                            opacity: 1,
                            duration:5000
                            },
            ],
            onChapterExit: []
        },
        {
            id: 'step10',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            chapterDiv: text_10,
            location: {
                center: [-73.988894, 40.697024],
                zoom: 14.5,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow
                curve: 2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'redline',
                opacity: 0.7,
                duration: 5000
            }],
            onChapterExit: []
        },
        {
            id: 'step11',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            chapterDiv: text_11,
            location: {
                center: [-74.002675, 40.666070],
                zoom: 12.7,
                pitch: 0,
                bearing: 0,
                speed: 1, // make the flying slow
                curve:2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'redline',
                opacity: 0.7,
                duration: 5000
            },
                {
                    layer: 'highway1',
                    opacity: 1,
                    duration:5000
                    },
                    {
                        layer: 'highway2',
                        opacity: 1,
                        duration:5000
                        },
                        {
                            layer: 'highway3',
                            opacity: 1,
                            duration:5000
                            },
            ],
            onChapterExit: [
            {
                layer: 'highway1',
                opacity: 0
                },
                {
                    layer: 'highway2',
                    opacity: 0
                    },
                    {
                        layer: 'highway3',
                        opacity: 0
                        },]
        },
    ]
};
