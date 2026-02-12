import { Sheet } from '../types';

export const getLocalizedData = (lang: string = 'en'): Sheet[] => {
  if (lang === 'th') {
    return [
      {
        id: 'sheet-1',
        front: { id: 'cover-outer', type: 'cover', pageNumber: 0 },
        back: {
          id: 'intro-left',
          type: 'content',
          layout: 'intro',
          pageNumber: 1,
          heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
          title: 'อนาคตแห่งการทำงาน',
          subtitle: 'วิสัยทัศน์ซีรีส์ 2026',
          marketingCopy: 'ที่ SUPR เราไม่เพียงแค่สร้างเฟอร์นิเจอร์ แต่เราออกแบบสภาพแวดล้อมที่ช่วยกระตุ้นสมาธิและความยั่งยืน คอลเลกชันปี 2026 ของเราคือจุดสูงสุดของการวิจัยด้านสรีรศาสตร์ผสมผสานความประณีตแบบไทยเข้ากับวัสดุศาสตร์ระดับโลก'
        }
      },
      {
        id: 'sheet-2',
        front: {
          id: 'story-left',
          type: 'content',
          layout: 'intro',
          pageNumber: 2,
          title: 'มรดกของเรา',
          subtitle: 'กรุงเทพฯ, 2010',
          marketingCopy: 'จากเวิร์กช็อปเล็กๆ ในย่านเจริญกรุง SUPR ได้เติบโตสู่ผู้นำระดับภูมิภาคด้านระบบสำนักงานสมรรถนะสูง ทุกส่วนโค้งตั้งใจออกแบบ ทุกข้อต่อผ่านการทดสอบล้านครั้ง เราให้ความสำคัญกับสรีระของคนเอเชียและสากล'
        },
        back: {
          id: 'clients-left',
          type: 'content',
          layout: 'clients',
          pageNumber: 3,
          clients: [
            { id: 'cl1', name: 'TECHSPACE', industry: 'Fintech', location: 'สาทร', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
            { id: 'cl2', name: 'NEXUS', industry: 'สถาปัตยกรรม', location: 'ทองหล่อ', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800' },
            { id: 'cl3', name: 'ORBITAL', industry: 'การบินและอวกาศ', location: 'อารีย์', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800' }
          ]
        }
      },
      {
        id: 'sheet-3',
        front: {
            id: 'projects-page',
            type: 'content',
            layout: 'projects',
            pageNumber: 4,
            title: 'โครงการในไทย',
            subtitle: 'กรณีศึกษา',
            projects: [
                { id: 'p1', title: 'เดอะ สยาม ฮับ', location: 'กรุงเทพฯ', image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p2', title: 'ดิจิทัล พาร์ค', location: 'ชลบุรี', image: 'https://images.unsplash.com/photo-1504384308090-c54be3855463?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p3', title: 'สาทร ไพรม์', location: 'กรุงเทพฯ', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p4', title: 'เชียงใหม่ ครีเอทีฟ ซิตี้', location: 'เชียงใหม่', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p5', title: 'ภูเก็ต สมาร์ท พอร์ต', location: 'ภูเก็ต', image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p6', title: 'ขอนแก่น อินโนเวชั่น', location: 'ขอนแก่น', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p7', title: 'รอยัล เอ็กซ์เชนจ์', location: 'สิงคโปร์', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p8', title: 'เมโทร ทาวเวอร์', location: 'กรุงเทพฯ', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p9', title: 'เซน ครีเอทีฟ สเปซ', location: 'โซล, KR', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p10', title: 'อัลไพน์ เวิร์กช็อป', location: 'เชียงราย', image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1200' }
            ]
        },
        back: {
            id: 'mood-summary',
            type: 'content',
            layout: 'mood-grid',
            pageNumber: 5,
            title: 'รวมสไตล์การทำงาน',
            subtitle: 'ค้นหาจังหวะของคุณ',
            moods: [
                { id: 'm1', title: 'Fresh Air', description: 'โปร่งสบายและเปิดกว้าง', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
                { id: 'm2', title: 'Modern Zen', description: 'อบอุ่น เรียบง่าย สไตล์คาเฟ่', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800' },
                { id: 'm3', title: 'Get It Done', description: 'เน้นงานหนัก สมาธิสูง', image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
                { id: 'm4', title: 'The Big Boss', description: 'ภูมิฐานและสง่างาม', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800' },
                { id: 'm5', title: 'Tiny Corner', description: 'จิ๋วแต่แจ๋ว ประหยัดพื้นที่', image: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=800' },
                { id: 'm6', title: 'Flexible Work', description: 'ยืดหยุ่น ไฮบริดไลฟ์สไตล์', image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800' }
            ]
        }
      },
      /* --- STAGGERED LAYOUT START --- */
      {
        id: 'sheet-4',
        front: {
            id: 'procurement-page',
            type: 'content',
            layout: 'process-strip', 
            pageNumber: 6,
            steps: [
                { id: 's1', title: 'การวิเคราะห์ความต้องการ', description: 'การตรวจสอบพื้นที่และคาดการณ์จำนวนบุคลากร', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800' },
                { id: 's2', title: 'การวางผังพื้นที่แบบ 3 มิติ', description: 'การเดินชมแผนผังในอนาคตผ่านระบบ VR', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
                { id: 's3', title: 'การคัดสรรวัสดุ', description: 'สิ่งทอสั่งทำและวัสดุไม้ที่ยั่งยืน', image: 'https://images.unsplash.com/photo-1553877615-2f112f99ce3a?auto=format&fit=crop&q=80&w=800' },
                { id: 's4', title: 'โลจิสติกส์แบบครบวงจร', description: 'การประกอบหลังเลิกงานและการกำจัดขยะ', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
                { id: 's5', title: 'การสนับสนุนตลอดอายุการใช้งาน', description: 'การตรวจเช็คสรีรศาสตร์ประจำปีสำหรับพนักงาน', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' }
            ]
        },
        back: {
            id: 'fresh-air-hero',
            type: 'content',
            layout: 'hero',
            pageNumber: 7,
            title: 'FRESH AIR',
            subtitle: 'พื้นที่ปลอดโปร่ง',
            marketingCopy: 'ลดความอึดอัด เพิ่มพื้นที่ว่างทางความคิด ด้วยเฟอร์นิเจอร์โทนสว่างและการออกแบบที่เปิดโล่ง เพื่อการทำงานที่สดชื่นตลอดวัน',
            heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
            hotspots: [
                { x: 30, y: 65, label: 'Aero Chair', targetId: 'm-air-1' },
                { x: 75, y: 55, label: 'Cloud Desk', targetId: 'm-air-2' }
            ]
        }
      },
      {
        id: 'sheet-5',
        front: {
            id: 'fresh-air-items',
            type: 'content',
            layout: 'grid',
            title: 'อากาศบริสุทธิ์',
            subtitle: 'พื้นที่หายใจได้',
            pageNumber: 8,
            items: [
                {
                    id: 'm-air-1', name: 'AERO CHAIR', category: 'Chair', price: '฿8,900', image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&q=80&w=800',
                    description: 'เก้าอี้ตาข่ายสีขาวล้วน ระบายอากาศดีเยี่ยม',
                    features: ['ตาข่ายระบายความร้อน', 'โครงสีขาว', 'น้ำหนักเบา']
                },
                {
                    id: 'm-air-2', name: 'CLOUD DESK', category: 'Table', price: '฿12,500', image: 'https://images.unsplash.com/photo-1519219788971-8d9797e0d299?auto=format&fit=crop&q=80&w=800',
                    description: 'โต๊ะสีขาวมินิมอล ผิวสัมผัสแบบด้าน',
                    features: ['ท็อปสีขาว', 'ขาเหล็กเพรียวบาง', 'ทำความสะอาดง่าย']
                }
            ]
        },
        back: {
            id: 'modern-zen-hero',
            type: 'content',
            layout: 'hero',
            pageNumber: 9,
            title: 'MODERN ZEN',
            subtitle: 'วิถีแห่งความสงบ',
            marketingCopy: 'สร้างบรรยากาศที่เงียบสงบเหมือนคาเฟ่ที่คุณชื่นชอบ ด้วยวัสดุไม้และสีโทนอุ่น เหมาะสำหรับงานครีเอทีฟที่ต้องการสมาธิ',
            heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200'
        }
      },
      {
        id: 'sheet-6',
        front: {
            id: 'modern-zen-items',
            type: 'content',
            layout: 'grid',
            title: 'โมเดิร์น เซน',
            subtitle: 'สงบและเรียบง่าย',
            pageNumber: 10,
            items: [
                {
                    id: 'm-zen-1', name: 'KYOTO CHAIR', category: 'Chair', price: '฿9,500', image: 'https://images.unsplash.com/photo-1596162955779-9c8c7c2ebf06?auto=format&fit=crop&q=80&w=800',
                    description: 'เก้าอี้ไม้ผสมผ้า ให้ความรู้สึกอบอุ่นเหมือนคาเฟ่',
                    features: ['ขาไม้จริง', 'เบาะผ้านุ่ม', 'ดีไซน์ญี่ปุ่น']
                },
                {
                    id: 'm-zen-2', name: 'OAK TABLE', category: 'Table', price: '฿15,000', image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&q=80&w=800',
                    description: 'โต๊ะไม้โอ๊คสีอ่อน ลายไม้ธรรมชาติ',
                    features: ['ไม้โอ๊คแท้', 'ขอบมน', 'เคลือบด้าน']
                }
            ]
        },
        back: {
            id: 'get-it-done-hero',
            type: 'content',
            layout: 'hero',
            pageNumber: 11,
            title: 'GET IT DONE',
            subtitle: 'พลังแห่งการโฟกัส',
            marketingCopy: 'สำหรับผู้ที่มีเป้าหมายชัดเจนและงานล้นมือ ดีไซน์สีเข้มที่ดุดันและฟังก์ชันที่พร้อมรองรับทุกภารกิจหนัก',
            heroImage: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=1200'
        }
      },
      {
        id: 'sheet-7',
        front: {
            id: 'get-it-done-items',
            type: 'content',
            layout: 'grid',
            title: 'พร้อมลุยงาน',
            subtitle: 'ประสิทธิภาพสูงสุด',
            pageNumber: 12,
            items: [
                {
                    id: 'm-done-1', name: 'TASK PRO', category: 'Chair', price: '฿12,900', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800',
                    description: 'เก้าอี้สีดำทรงพลัง รองรับการนั่งทำงานนานๆ',
                    features: ['ปรับได้ทุกส่วน', 'รับน้ำหนักได้มาก', 'ล้อลื่นพิเศษ']
                },
                {
                    id: 'm-done-2', name: 'FOCUS DESK', category: 'Table', price: '฿18,000', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800',
                    description: 'โต๊ะทำงานสีเข้ม พื้นที่กว้างขวางสำหรับทุกอุปกรณ์',
                    features: ['ท็อปกันรอย', 'ช่องเก็บสายไฟ', 'โครงสร้างแข็งแกร่ง']
                }
            ]
        },
        back: {
            id: 'big-boss-hero',
            type: 'content',
            layout: 'hero',
            pageNumber: 13,
            title: 'THE BIG BOSS',
            subtitle: 'ศูนย์บัญชาการ',
            marketingCopy: 'สร้างความประทับใจตั้งแต่แรกเห็น สะท้อนภาพลักษณ์ผู้นำด้วยเฟอร์นิเจอร์ระดับพรีเมียมที่โอ่อ่าและน่าเกรงขาม',
            heroImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200'
        }
      },
      {
        id: 'sheet-8',
        front: {
            id: 'big-boss-items',
            type: 'content',
            layout: 'grid',
            title: 'บิ๊กบอส',
            subtitle: 'อำนาจและบารมี',
            pageNumber: 14,
            items: [
                {
                    id: 'm-boss-1', name: 'EMPEROR', category: 'Chair', price: '฿45,000', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
                    description: 'เก้าอี้หนังแท้พนักพิงสูง สง่างามและภูมิฐาน',
                    features: ['หนังแท้เกรดเอ', 'พนักพิงสูงพิเศษ', 'เอนนอนได้']
                },
                {
                    id: 'm-boss-2', name: 'COMMAND DESK', category: 'Table', price: '฿89,000', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
                    description: 'โต๊ะผู้บริหารขนาดใหญ่ พร้อมตู้เก็บของในตัว',
                    features: ['ไม้เนื้อแข็ง', 'แผ่นบังตา', 'ลิ้นชักนิรภัย']
                }
            ]
        },
        back: {
            id: 'tiny-corner-hero',
            type: 'content',
            layout: 'hero',
            pageNumber: 15,
            title: 'TINY CORNER',
            subtitle: 'ความสุขในพื้นที่จำกัด',
            marketingCopy: 'เหมาะสำหรับชีวิตคอนโดที่ทุกตารางนิ้วมีค่า เปลี่ยนมุมเล็กๆ ให้เป็นโฮมออฟฟิศที่มีประสิทธิภาพ โดยไม่กินพื้นที่อยู่อาศัย',
            heroImage: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=1200'
        }
      },
      {
        id: 'sheet-9',
        front: {
            id: 'tiny-corner-items',
            type: 'content',
            layout: 'grid',
            title: 'มุมเล็กสเปซน้อย',
            subtitle: 'กะทัดรัดแต่ครบครัน',
            pageNumber: 16,
            items: [
                {
                    id: 'm-tiny-1', name: 'NOOK CHAIR', category: 'Chair', price: '฿4,500', image: 'https://images.unsplash.com/photo-1503602642458-23211144584b?auto=format&fit=crop&q=80&w=800',
                    description: 'เก้าอี้ขนาดกะทัดรัด พับเก็บหรือสอดใต้โต๊ะได้ง่าย',
                    features: ['ประหยัดพื้นที่', 'ดีไซน์เพรียว', 'นั่งสบาย']
                },
                {
                    id: 'm-tiny-2', name: 'WALL DESK', category: 'Table', price: '฿6,200', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
                    description: 'โต๊ะทำงานขนาดเล็ก ยึดผนังหรือพับเก็บได้',
                    features: ['ลึกเพียง 50cm', 'ชั้นวางในตัว', 'ติดตั้งง่าย']
                }
            ]
        },
        back: {
            id: 'flexible-work-hero',
            type: 'content',
            layout: 'hero',
            pageNumber: 17,
            title: 'FLEXIBLE WORK',
            subtitle: 'หนึ่งเดียวครบจบ',
            marketingCopy: 'ตอบโจทย์คนรุ่นใหม่ที่บ้านคือที่ทำงานและที่พักผ่อน เฟอร์นิเจอร์ชิ้นเดียวที่เป็นได้ทั้งโต๊ะประชุม โต๊ะเกมมิ่ง และโต๊ะทานข้าว',
            heroImage: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=1200'
        }
      },
      {
        id: 'sheet-10',
        front: {
            id: 'flexible-work-items',
            type: 'content',
            layout: 'grid',
            title: 'งานยืดหยุ่น',
            subtitle: 'ไฮบริดไลฟ์สไตล์',
            pageNumber: 18,
            items: [
                {
                    id: 'm-flex-1', name: 'HYBRID CHAIR', category: 'Chair', price: '฿7,900', image: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=800',
                    description: 'เก้าอี้ที่นั่งทำงานก็ดี เล่นเกมก็ได้ สบายตลอดวัน',
                    features: ['เอนได้มาก', 'เบาะทนทาน', 'ดีไซน์สปอร์ต']
                },
                {
                    id: 'm-flex-2', name: 'DUAL TABLE', category: 'Table', price: '฿9,900', image: 'https://images.unsplash.com/photo-1595515106967-1b327b0b8c6e?auto=format&fit=crop&q=80&w=800',
                    description: 'โต๊ะอเนกประสงค์ แข็งแรง ทนทานต่อน้ำและรอยขีดข่วน',
                    features: ['ท็อปทนทาน', 'ขาปรับระดับได้', 'ใช้เป็นโต๊ะกินข้าวได้']
                }
            ]
        },
        back: {
          id: 'tables-mood',
          type: 'content',
          layout: 'full-image',
          pageNumber: 19,
          heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200'
        }
      },
      {
        id: 'sheet-11',
        front: {
            id: 'summary-page',
            type: 'content',
            layout: 'summary',
            pageNumber: 20,
            title: 'มาตรฐาน SUPR',
            marketingCopy: 'ความมุ่งมั่นในคุณภาพของเราขยายไปไกลกว่าโรงงาน เราเชื่อในเศรษฐกิจหมุนเวียน โดยเสนอโปรแกรมปรับปรุงตลอดอายุการใช้งานสำหรับรุ่นงานทั่วไปทุกรุ่น'
        },
        back: {
            id: 'back-cover',
            type: 'back-cover',
            pageNumber: 21
        }
      }
    ];
  }

  // DEFAULT ENGLISH DATA
  return [
    {
      id: 'sheet-1',
      front: { id: 'cover-outer', type: 'cover', pageNumber: 0 },
      back: {
        id: 'intro-left',
        type: 'content',
        layout: 'intro',
        pageNumber: 1,
        heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
        title: 'The Future of Work',
        subtitle: '2026 Visionary Series',
        marketingCopy: 'Manufactured by our own factory, we are confident in every quality process. All parts are fully supported, even after the warranty period expires. For long-term use and long-term cost-effectiveness.'
      }
    },
    {
      id: 'sheet-2',
      front: {
        id: 'story-left',
        type: 'content',
        layout: 'intro',
        pageNumber: 2,
        title: 'Our Heritage',
        subtitle: 'Bangkok, 2010',
        marketingCopy: 'For over 15 years, we\'ve been dedicated to creating the world\'s most comfortable and ergonomic office chairs. Our mission is simple: to transform your workspace into a place of comfort, productivity, and well-being.'
      },
      back: {
        id: 'clients-left',
        type: 'content',
        layout: 'clients',
        pageNumber: 3,
        clients: [
            { id: 'cl1', name: 'TECHSPACE', industry: 'Fintech', location: 'Sathorn', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
            { id: 'cl2', name: 'NEXUS', industry: 'Architecture', location: 'Thong Lo', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800' },
            { id: 'cl3', name: 'ORBITAL', industry: 'Aerospace', location: 'Ari', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800' }
        ]
      }
    },
    {
        id: 'sheet-3',
        front: {
            id: 'projects-page',
            type: 'content',
            layout: 'projects',
            pageNumber: 4,
            title: 'Projects in Thailand',
            subtitle: 'Case Studies',
            projects: [
                { id: 'p1', title: 'The Siam Hub', location: 'Bangkok, TH', image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p2', title: 'Digital Park Thailand', location: 'Chonburi, TH', image: 'https://images.unsplash.com/photo-1504384308090-c54be3855463?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p3', title: 'Sathorn Prime HQ', location: 'Bangkok, TH', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p4', title: 'Chiang Mai Creative City', location: 'Chiang Mai, TH', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p5', title: 'Phuket Smart Port', location: 'Phuket, TH', image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p6', title: 'Khon Kaen Innovation', location: 'Khon Kaen, TH', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p7', title: 'Royal Exchange', location: 'Singapore', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p8', title: 'Metro Tower', location: 'Bangkok, TH', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p9', title: 'Zen Creative Space', location: 'Seoul, KR', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200' },
                { id: 'p10', title: 'Alpine Workshop', location: 'Chiang Rai, TH', image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1200' }
            ]
        },
        back: {
            id: 'mood-summary',
            type: 'content',
            layout: 'mood-grid',
            pageNumber: 5,
            title: 'Curated Moods',
            subtitle: 'Find Your Flow',
            moods: [
                { id: 'm1', title: 'Fresh Air', description: 'Light, breathable, and open.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
                { id: 'm2', title: 'Modern Zen', description: 'Warm wood tones, cafe vibes.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800' },
                { id: 'm3', title: 'Get It Done', description: 'High focus, dark aesthetics.', image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=800' },
                { id: 'm4', title: 'The Big Boss', description: 'Executive power and status.', image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800' },
                { id: 'm5', title: 'Tiny Corner', description: 'Space-saving efficiency.', image: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=800' },
                { id: 'm6', title: 'Flexible Work', description: 'Hybrid work and play.', image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800' }
            ]
        }
    },
    {
      id: 'sheet-4',
      front: {
          id: 'procurement-page',
          type: 'content',
          layout: 'process-strip', 
          pageNumber: 6,
          steps: [
              { id: 's1', title: 'REQUIREMENTS ANALYSIS', description: 'Space audit and headcount projections.', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800' },
              { id: 's2', title: '3D SPATIAL PLANNING', description: 'VR walkthroughs of your future floor plan.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
              { id: 's3', title: 'MATERIAL CURATION', description: 'Custom textiles and sustainable wood finishes.', image: 'https://images.unsplash.com/photo-1553877615-2f112f99ce3a?auto=format&fit=crop&q=80&w=800' },
              { id: 's4', title: 'WHITE-GLOVE LOGISTICS', description: 'After-hours assembly and waste removal.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
              { id: 's5', title: 'LIFECYCLE SUPPORT', description: 'Annual ergonomic check-ins for staff.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' }
          ]
      },
      back: {
          id: 'fresh-air-hero',
          type: 'content',
          layout: 'hero',
          pageNumber: 7,
          title: 'FRESH AIR',
          subtitle: 'Breathe Easy',
          marketingCopy: 'The ultimate layman\'s term for a workspace that won\'t feel stuffy or heavy. Light, breathable, and designed for an easy, nature-connected workflow all day long.',
          heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
          hotspots: [
              { x: 30, y: 65, label: 'Aero Chair', targetId: 'm-air-1' },
              { x: 75, y: 55, label: 'Cloud Desk', targetId: 'm-air-2' }
          ]
      }
    },
    {
      id: 'sheet-5',
      front: {
          id: 'fresh-air-items',
          type: 'content',
          layout: 'grid',
          title: 'The Fresh Air Office',
          subtitle: 'Recommended',
          pageNumber: 8,
          items: [
              {
                  id: 'm-air-1', name: 'AERO CHAIR', category: 'Chair', price: '$450', image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&q=80&w=800',
                  description: 'All-white mesh chair designed for maximum breathability.',
                  features: ['Cool-Mesh', 'White Frame', 'Ultra-Light']
              },
              {
                  id: 'm-air-2', name: 'CLOUD DESK', category: 'Table', price: '$520', image: 'https://images.unsplash.com/photo-1519219788971-8d9797e0d299?auto=format&fit=crop&q=80&w=800',
                  description: 'Minimalist white desk with matte finish.',
                  features: ['White Top', 'Slim Legs', 'Easy Clean']
              }
          ]
      },
      back: {
          id: 'modern-zen-hero',
          type: 'content',
          layout: 'hero',
          pageNumber: 9,
          title: 'MODERN ZEN',
          subtitle: 'Cafe Aesthetics',
          marketingCopy: 'For those who want a Pinterest-style office that feels like a cafe. Clean lines, light wood textures, and plenty of breathing room for a peaceful vibe.',
          heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200'
      }
    },
    {
      id: 'sheet-6',
      front: {
          id: 'modern-zen-items',
          type: 'content',
          layout: 'grid',
          title: 'The Modern Zen',
          subtitle: 'Nature & Calm',
          pageNumber: 10,
          items: [
              {
                  id: 'm-zen-1', name: 'KYOTO CHAIR', category: 'Chair', price: '$480', image: 'https://images.unsplash.com/photo-1596162955779-9c8c7c2ebf06?auto=format&fit=crop&q=80&w=800',
                  description: 'Wood accent chair with soft fabric upholstery.',
                  features: ['Solid Wood Legs', 'Soft Fabric', 'Japandi Style']
              },
              {
                  id: 'm-zen-2', name: 'OAK TABLE', category: 'Table', price: '$650', image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&q=80&w=800',
                  description: 'Light oak table with natural grain texture.',
                  features: ['Real Oak', 'Rounded Edges', 'Matte Seal']
              }
          ]
      },
      back: {
          id: 'get-it-done-hero',
          type: 'content',
          layout: 'hero',
          pageNumber: 11,
          title: 'GET IT DONE',
          subtitle: 'High Energy',
          marketingCopy: 'Practical and straightforward. A high-energy setup for students and researchers with heavy workloads. All-black, heavy-duty, and focused on pure efficiency.',
          heroImage: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=1200'
      }
    },
    {
      id: 'sheet-7',
      front: {
          id: 'get-it-done-items',
          type: 'content',
          layout: 'grid',
          title: 'Get It Done',
          subtitle: 'Focus & Productivity',
          pageNumber: 12,
          items: [
              {
                  id: 'm-done-1', name: 'TASK PRO', category: 'Chair', price: '$599', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800',
                  description: 'High-performance black task chair for heavy workloads.',
                  features: ['Fully Adjustable', 'Heavy Duty', 'Silent Glide']
              },
              {
                  id: 'm-done-2', name: 'FOCUS DESK', category: 'Table', price: '$750', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800',
                  description: 'Dark grey desk with ample surface area for multiple monitors.',
                  features: ['Scratch Resistant', 'Cable Tray', 'Sturdy Frame']
              }
          ]
      },
      back: {
          id: 'big-boss-hero',
          type: 'content',
          layout: 'hero',
          pageNumber: 13,
          title: 'THE BIG BOSS',
          subtitle: 'Command Center',
          marketingCopy: 'A fun, slightly cheeky way to describe your most premium furniture set. For managers and owners who want to look impressive on Zoom calls. Large chairs and leather finishes.',
          heroImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200'
      }
    },
    {
      id: 'sheet-8',
      front: {
          id: 'big-boss-items',
          type: 'content',
          layout: 'grid',
          title: 'The Big Boss',
          subtitle: 'Authority & Status',
          pageNumber: 14,
          items: [
              {
                  id: 'm-boss-1', name: 'EMPEROR', category: 'Chair', price: '$1,800', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800',
                  description: 'Premium leather high-back chair for a commanding presence.',
                  features: ['Top Grain Leather', 'Extra High Back', 'Recliner Mode']
              },
              {
                  id: 'm-boss-2', name: 'COMMAND DESK', category: 'Table', price: '$3,500', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
                  description: 'Large executive desk with integrated storage and modesty panel.',
                  features: ['Solid Wood', 'Modesty Panel', 'Secure Drawers']
              }
          ]
      },
      back: {
          id: 'tiny-corner-hero',
          type: 'content',
          layout: 'hero',
          pageNumber: 15,
          title: 'TINY CORNER',
          subtitle: 'Condo Living',
          marketingCopy: 'Space is a luxury. Designed for condo dwellers or small townhouses. Small footprints, light colors, and furniture that "hides" in the room to maximize your living space.',
          heroImage: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=1200'
      }
    },
    {
      id: 'sheet-9',
      front: {
          id: 'tiny-corner-items',
          type: 'content',
          layout: 'grid',
          title: 'The Tiny Corner',
          subtitle: 'Space-Saving',
          pageNumber: 16,
          items: [
              {
                  id: 'm-tiny-1', name: 'NOOK CHAIR', category: 'Chair', price: '$180', image: 'https://images.unsplash.com/photo-1503602642458-23211144584b?auto=format&fit=crop&q=80&w=800',
                  description: 'Compact chair that tucks completely under the desk.',
                  features: ['Space Saver', 'Sleek Profile', 'Comfortable']
              },
              {
                  id: 'm-tiny-2', name: 'WALL DESK', category: 'Table', price: '$250', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
                  description: 'Small footprint desk, perfect for condos.',
                  features: ['50cm Depth', 'Built-in Shelf', 'Easy Mount']
              }
          ]
      },
      back: {
          id: 'flexible-work-hero',
          type: 'content',
          layout: 'hero',
          pageNumber: 17,
          title: 'FLEXIBLE WORK',
          subtitle: 'The Hybrid Era',
          marketingCopy: 'For the generation that switches between working, gaming, and relaxing. Functional, easy to clean, and very durable furniture that does it all.',
          heroImage: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=1200'
      }
    },
    {
      id: 'sheet-10',
      front: {
          id: 'flexible-work-items',
          type: 'content',
          layout: 'grid',
          title: 'Flexible Work',
          subtitle: 'Hybrid & Multi-use',
          pageNumber: 18,
          items: [
              {
                  id: 'm-flex-1', name: 'HYBRID CHAIR', category: 'Chair', price: '$350', image: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=800',
                  description: 'Versatile chair good for both typing and gaming.',
                  features: ['High Recline', 'Durable Fabric', 'Sporty Look']
              },
              {
                  id: 'm-flex-2', name: 'DUAL TABLE', category: 'Table', price: '$400', image: 'https://images.unsplash.com/photo-1595515106967-1b327b0b8c6e?auto=format&fit=crop&q=80&w=800',
                  description: 'Multi-purpose table that doubles as a dining surface.',
                  features: ['Heat Resistant', 'Adjustable Feet', 'Dining Height']
              }
          ]
      },
      back: {
        id: 'tables-mood',
        type: 'content',
        layout: 'full-image',
        pageNumber: 19,
        heroImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200'
      }
    },
    {
      id: 'sheet-11',
      front: {
          id: 'summary-page',
          type: 'content',
          layout: 'summary',
          pageNumber: 20,
          title: 'The SUPR Standard',
          marketingCopy: 'Our commitment to quality extends beyond the factory floor. We believe in a circular economy, offering a lifetime refurbishment program for all standard models.'
      },
      back: {
          id: 'back-cover',
          type: 'back-cover',
          pageNumber: 21
      }
    }
  ];
}
