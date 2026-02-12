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
                { id: 'm5', title: 'Minimal', description: 'จิ๋วแต่แจ๋ว ประหยัดพื้นที่', image: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=800' },
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
            heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
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
                    id: 'm-air-1', name: 'H2 Cabinet', category: 'Storage', price: '฿15,000', image: '/images/products/fresh-air/H2 Cabinet.png',
                    description: 'ตู้เก็บของดีไซน์ทันสมัย จุของได้เยอะ',
                    features: ['ดีไซน์มินิมอล', 'โครงสร้างแข็งแรง', 'จัดระเบียบง่าย']
                },
                {
                    id: 'm-air-2', name: 'H2 Meeting Table', category: 'Table', price: '฿25,000', image: '/images/products/fresh-air/H2 Meeting Table.jpg',
                    description: 'โต๊ะประชุมขนาดใหญ่ รองรับการทำงานเป็นทีม',
                    features: ['ท็อปไม้คุณภาพสูง', 'ขาเหล็กมั่นคง', 'นั่งได้หลายคน']
                },
                {
                    id: 'm-air-3', name: 'H2 Workstation', category: 'Workstation', price: '฿35,000', image: '/images/products/fresh-air/H2 Workstation.png',
                    description: 'ชุดโต๊ะทำงานแบบกลุ่ม เพิ่มประสิทธิภาพการทำงาน',
                    features: ['ประหยัดพื้นที่', 'มีฉากกั้นส่วนตัว', 'จัดการสายไฟได้ดี']
                },
                {
                    id: 'm-air-4', name: 'H2 Executive', category: 'Executive', price: '฿45,000', image: '/images/products/fresh-air/H2 executive.png',
                    description: 'ชุดผู้บริหารระดับพรีเมียม สะท้อนภาพลักษณ์ผู้นำ',
                    features: ['ดีไซน์หรูหรา', 'วัสดุเกรดพรีเมียม', 'ฟังก์ชันครบครัน']
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
                    id: 'm-zen-1', name: 'H10 Cabinet', category: 'Storage', price: '฿16,000', image: '/images/products/modern-zen/H10 Cabinet.png',
                    description: 'ตู้เก็บของดีไซน์เรียบหรู ผิวสัมผัสไม้ธรรมชาติ',
                    features: ['จุของได้เยอะ', 'ระบบปิดนุ่มนวล', 'ดีไซน์ทันสมัย']
                },
                {
                    id: 'm-zen-2', name: 'H10 Executive', category: 'Executive', price: '฿48,000', image: '/images/products/modern-zen/H10 Executive.png',
                    description: 'โต๊ะผู้บริหารระดับพรีเมียม สำหรับผู้นำยุคใหม่',
                    features: ['หน้าโต๊ะกว้าง', 'มีช่องปลั๊กในตัว', 'ดีไซน์สง่างาม']
                },
                {
                    id: 'm-zen-3', name: 'H10 Meeting Table', category: 'Table', price: '฿28,000', image: '/images/products/modern-zen/H10 Meeting Table.png',
                    description: 'โต๊ะประชุมเพื่อการระดมสมองอย่างสร้างสรรค์',
                    features: ['โครงสร้างแข็งแรง', 'จัดการสายไฟง่าย', 'นั่งได้ 6-8 คน']
                },
                {
                    id: 'm-zen-4', name: 'H10 Shelf', category: 'Storage', price: '฿12,000', image: '/images/products/modern-zen/H10 Shelf.png',
                    description: 'ชั้นวางของแบบเปิด โชว์ของสะสมและจัดระเบียบ',
                    features: ['ปรับระดับชั้นได้', 'โครงเหล็กทนทาน', 'มินิมอลสไตล์']
                },
                {
                    id: 'm-zen-5', name: 'H10 Workstation', category: 'Workstation', price: '฿38,000', image: '/images/products/modern-zen/H10 Workstation.png',
                    description: 'ชุดโต๊ะทำงานกลุ่ม ออกแบบเพื่อการโฟกัสและลื่นไหล',
                    features: ['ฉากกั้นส่วนตัว', 'ระดับความสูงเหมาะสม', 'พื้นที่ส่วนกลาง']
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
                    id: 'm-done-1', name: 'W2 Cabinet', category: 'Storage', price: '฿14,500', image: '/images/products/get-it-done/W2 Cabinet.png',
                    description: 'ตู้เก็บของดีไซน์ทันสมัย ช่วยจัดระเบียบเอกสารและอุปกรณ์',
                    features: ['โครงสร้างแข็งแรง', 'จุของได้เยอะ', 'ดีไซน์เรียบหรู']
                },
                {
                    id: 'm-done-2', name: 'W2 Drawer', category: 'Storage', price: '฿4,500', image: '/images/products/get-it-done/W2 Drawer.png',
                    description: 'ตู้ลิ้นชักอเนกประสงค์ เคลื่อนย้ายสะดวก',
                    features: ['ล้อเลื่อนลื่นไหล', 'ล็อคกุญแจได้', 'ประหยัดพื้นที่']
                },
                {
                    id: 'm-done-3', name: 'W2 Executive', category: 'Executive', price: '฿42,000', image: '/images/products/get-it-done/W2 Executive.png',
                    description: 'โต๊ะผู้บริหารระดับพรีเมียม เสริมภาพลักษณ์ผู้นำ',
                    features: ['ดีไซน์สง่างาม', 'พื้นที่กว้างขวาง', 'วัสดุเกรดพรีเมียม']
                },
                {
                    id: 'm-done-4', name: 'W2 Meeting', category: 'Table', price: '฿24,000', image: '/images/products/get-it-done/W2 Meeting.png',
                    description: 'โต๊ะประชุมขนาดใหญ่ รองรับการระดมสมอง',
                    features: ['รองรับการประชุม', 'โครงสร้างมั่นคง', 'จัดการสายไฟง่าย']
                },
                {
                    id: 'm-done-5', name: 'W2 Shelf', category: 'Storage', price: '฿8,900', image: '/images/products/get-it-done/W2 Shelf.png',
                    description: 'ชั้นวางของอเนกประสงค์ โครงเหล็กแข็งแรง',
                    features: ['ปรับระดับได้', 'โครงเหล็กทนทาน', 'ดีไซน์โปร่ง']
                },
                {
                    id: 'm-done-6', name: 'W2 Workstation', category: 'Workstation', price: '฿32,000', image: '/images/products/get-it-done/W2 Workstation.png',
                    description: 'ชุดโต๊ะทำงานกลุ่ม เพิ่มประสิทธิภาพการทำงานทีม',
                    features: ['เพิ่มความเป็นส่วนตัว', 'จัดการพื้นที่ได้ดี', 'เหมาะกับออฟฟิศยุคใหม่']
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
                    id: 'm-boss-1', name: 'Executive Workstation', category: 'Workstation', price: '฿65,000', image: '/images/products/the-big-boss/Executive Workstation.png',
                    description: 'ชุดทำงานผู้บริหารครบวงจร พร้อมตู้เก็บของและพื้นที่กว้างขวาง',
                    features: ['พื้นที่กว้างขวาง', 'ดีไซน์ทันสมัย', 'วัสดุเกรดพรีเมียม']
                },
                {
                    id: 'm-boss-2', name: 'Luxury Workstation', category: 'Workstation', price: '฿89,000', image: '/images/products/the-big-boss/Luxury Workstation.png',
                    description: 'สเตชั่นทำงานสุดหรู สะท้อนความสำเร็จและรสนิยมเหนือระดับ',
                    features: ['หรูหรามีระดับ', 'ฟังก์ชันครบครัน', 'ความเป็นส่วนตัวสูง']
                },
                {
                    id: 'm-boss-3', name: 'Grand Meeting Table', category: 'Table', price: '฿45,000', image: '/images/products/the-big-boss/Meeting Table.png',
                    description: 'โต๊ะประชุมขนาดใหญ่ รองรับการตัดสินใจสำคัญ',
                    features: ['รองรับ 10-12 ที่นั่ง', 'โครงสร้างแข็งแกร่ง', 'ช่องร้อยสายไฟในตัว']
                }
            ]
        },
        back: {
            id: 'minimal-hero',
            type: 'content',
            layout: 'hero',
            pageNumber: 15,
            title: 'MINIMAL',
            subtitle: 'ความสุขในพื้นที่จำกัด',
            marketingCopy: 'เหมาะสำหรับชีวิตคอนโดที่ทุกตารางนิ้วมีค่า เปลี่ยนมุมเล็กๆ ให้เป็นโฮมออฟฟิศที่มีประสิทธิภาพ โดยไม่กินพื้นที่อยู่อาศัย',
            heroImage: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=1200'
        }
      },
      {
        id: 'sheet-9',
        front: {
            id: 'minimal-items',
            type: 'content',
            layout: 'grid',
            title: 'มินิมอล',
            subtitle: 'กะทัดรัดแต่ครบครัน',
            pageNumber: 16,
            items: [
                {
                    id: 'm-min-1', name: 'Single Workstation', category: 'Table', price: '฿8,500', image: '/images/products/tiny-corner/Single workstation.png',
                    description: 'โต๊ะทำงานเดี่ยวขนาดกะทัดรัด',
                    features: ['ประหยัดพื้นที่', 'ดีไซน์มินิมอล', 'ทนทาน']
                },
                {
                    id: 'm-min-2', name: 'Table with Drawer', category: 'Table', price: '฿10,500', image: '/images/products/tiny-corner/Table with drawer.png',
                    description: 'โต๊ะเรียบหรูพร้อมลิ้นชักเก็บของ',
                    features: ['มีลิ้นชักในตัว', 'เส้นสายสะอาดตา', 'แข็งแรง']
                },
                {
                    id: 'm-min-3', name: 'Double Workstation', category: 'Workstation', price: '฿15,500', image: '/images/products/tiny-corner/Double Workstation.png',
                    description: 'พื้นที่ทำงานสำหรับสองคน',
                    features: ['แชร์พื้นที่', 'เหมาะกับการทำงานคู่', 'ประหยัดที่']
                },
                {
                    id: 'm-min-4', name: 'White Table', category: 'Table', price: '฿7,000', image: '/images/products/tiny-corner/White Table.png',
                    description: 'โต๊ะสีขาวเรียบง่ายเข้าได้กับทุกห้อง',
                    features: ['อเนกประสงค์', 'ทำความสะอาดง่าย', 'ทันสมัย']
                },
                {
                    id: 'm-min-5', name: 'Double Curved Workstation', category: 'Workstation', price: '฿18,500', image: '/images/products/tiny-corner/Double Curved Workstation.png',
                    description: 'โต๊ะทำงานคู่ดีไซน์โค้งมน เพิ่มพื้นที่ใช้สอย',
                    features: ['ดีไซน์โค้งรับสรีระ', 'พื้นที่กว้างขวาง', 'เหมาะสำหรับทำงานคู่']
                },
                {
                    id: 'm-min-6', name: 'Meeting Table', category: 'Table', price: '฿12,000', image: '/images/products/tiny-corner/Meeting Table.png',
                    description: 'โต๊ะประชุมขนาดกะทัดรัดสำหรับทีมเล็ก',
                    features: ['รองรับ 4-6 ที่นั่ง', 'โครงสร้างแข็งแรง', 'ดีไซน์เรียบง่าย']
                },
                {
                    id: 'm-min-7', name: 'Single Curved Workstation', category: 'Table', price: '฿9,500', image: '/images/products/tiny-corner/Single Curved Workstation.png',
                    description: 'โต๊ะทำงานเดี่ยวทรงโค้ง เข้ามุมได้ลงตัว',
                    features: ['เข้ามุมได้ดี', 'ดีไซน์ทันสมัย', 'เพิ่มพื้นที่วางของ']
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
                { id: 'm5', title: 'Minimal', description: 'Space-saving efficiency.', image: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=800' },
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
                    id: 'm-air-1', name: 'H2 Cabinet', category: 'Storage', price: '$450', image: '/images/products/fresh-air/H2 Cabinet.png',
                    description: 'Modern design cabinet with ample storage.',
                    features: ['Minimalist Design', 'Sturdy Structure', 'Easy Organization']
                },
                {
                    id: 'm-air-2', name: 'H2 Meeting Table', category: 'Table', price: '$750', image: '/images/products/fresh-air/H2 Meeting Table.jpg',
                    description: 'Large meeting table supporting team collaboration.',
                    features: ['High Quality Top', 'Stable Legs', 'Spacious']
                },
                {
                    id: 'm-air-3', name: 'H2 Workstation', category: 'Workstation', price: '$1,050', image: '/images/products/fresh-air/H2 Workstation.png',
                    description: 'Group workstation set to boost productivity.',
                    features: ['Space Saving', 'Privacy Screens', 'Cable Management']
                },
                {
                    id: 'm-air-4', name: 'H2 Executive', category: 'Executive', price: '$1,350', image: '/images/products/fresh-air/H2 executive.png',
                    description: 'Premium executive set reflecting leadership.',
                    features: ['Luxury Design', 'Premium Materials', 'Full Functionality']
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
                  id: 'm-zen-1', name: 'H10 Cabinet', category: 'Storage', price: '$480', image: '/images/products/modern-zen/H10 Cabinet.png',
                  description: 'Sleek storage solution with natural wood finish.',
                  features: ['Ample Storage', 'Soft Close', 'Modern Look']
              },
              {
                  id: 'm-zen-2', name: 'H10 Executive', category: 'Executive', price: '$1,450', image: '/images/products/modern-zen/H10 Executive.png',
                  description: 'Premium executive desk for the modern leader.',
                  features: ['Spacious Top', 'Integrated Power', 'Elegant Design']
              },
              {
                  id: 'm-zen-3', name: 'H10 Meeting Table', category: 'Table', price: '$850', image: '/images/products/modern-zen/H10 Meeting Table.png',
                  description: 'Collaborative table for creative discussions.',
                  features: ['Solid Construction', 'Cable Management', 'Seats 6-8']
              },
              {
                  id: 'm-zen-4', name: 'H10 Shelf', category: 'Storage', price: '$350', image: '/images/products/modern-zen/H10 Shelf.png',
                  description: 'Open shelving unit for display and organization.',
                  features: ['Adjustable Shelves', 'Sturdy Frame', 'Minimalist']
              },
              {
                  id: 'm-zen-5', name: 'H10 Workstation', category: 'Workstation', price: '$1,150', image: '/images/products/modern-zen/H10 Workstation.png',
                  description: 'Team workstation designed for focus and flow.',
                  features: ['Privacy Panels', 'Ergonomic Height', 'Shared Resources']
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
                  id: 'm-done-1', name: 'W2 Cabinet', category: 'Storage', price: '$420', image: '/images/products/get-it-done/W2 Cabinet.png',
                  description: 'Modern storage cabinet to keep your documents organized.',
                  features: ['Sturdy Construction', 'Ample Storage', 'Sleek Design']
              },
              {
                  id: 'm-done-2', name: 'W2 Drawer', category: 'Storage', price: '$130', image: '/images/products/get-it-done/W2 Drawer.png',
                  description: 'Versatile mobile drawer unit for personal storage.',
                  features: ['Smooth Casters', 'Lockable', 'Space Saving']
              },
              {
                  id: 'm-done-3', name: 'W2 Executive', category: 'Executive', price: '$1,250', image: '/images/products/get-it-done/W2 Executive.png',
                  description: 'Premium executive desk designed for leadership.',
                  features: ['Elegant Design', 'Spacious Surface', 'Premium Materials']
              },
              {
                  id: 'm-done-4', name: 'W2 Meeting', category: 'Table', price: '$720', image: '/images/products/get-it-done/W2 Meeting.png',
                  description: 'Large meeting table for collaborative sessions.',
                  features: ['Collaboration Ready', 'Stable Structure', 'Cable Management']
              },
              {
                  id: 'm-done-5', name: 'W2 Shelf', category: 'Storage', price: '$260', image: '/images/products/get-it-done/W2 Shelf.png',
                  description: 'Multi-purpose shelf with durable steel frame.',
                  features: ['Adjustable Shelves', 'Durable Frame', 'Open Design']
              },
              {
                  id: 'm-done-6', name: 'W2 Workstation', category: 'Workstation', price: '$950', image: '/images/products/get-it-done/W2 Workstation.png',
                  description: 'Group workstation set for team productivity.',
                  features: ['Enhanced Privacy', 'Space Efficient', 'Modern Office Ready']
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
                    id: 'm-boss-1', name: 'Executive Workstation', category: 'Workstation', price: '$1,950', image: '/images/products/the-big-boss/Executive Workstation.png',
                    description: 'Complete executive workstation with ample storage and spacious design.',
                    features: ['Spacious Surface', 'Modern Design', 'Premium Materials']
                },
                {
                    id: 'm-boss-2', name: 'Luxury Workstation', category: 'Workstation', price: '$2,650', image: '/images/products/the-big-boss/Luxury Workstation.png',
                    description: 'Ultra-luxury workstation reflecting success and superior taste.',
                    features: ['High-End Luxury', 'Full Functionality', 'High Privacy']
                },
                {
                    id: 'm-boss-3', name: 'Grand Meeting Table', category: 'Table', price: '$1,350', image: '/images/products/the-big-boss/Meeting Table.png',
                    description: 'Large meeting table designed for important decision-making.',
                    features: ['Seats 10-12', 'Robust Structure', 'Integrated Cable Management']
                }
            ]
      },
      back: {
          id: 'minimal-hero',
          type: 'content',
          layout: 'hero',
          pageNumber: 15,
          title: 'MINIMAL',
          subtitle: 'Condo Living',
          marketingCopy: 'Ideal for condo living where every inch counts. Transform a small corner into an efficient home office without sacrificing your living space.',
          heroImage: 'https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=1200'
      }
    },
    {
      id: 'sheet-9',
      front: {
          id: 'minimal-items',
          type: 'content',
          layout: 'grid',
          title: 'Minimal',
          subtitle: 'Compact & Complete',
          pageNumber: 16,
          items: [
                {
                    id: 'm-min-1', name: 'Single Workstation', category: 'Table', price: '$250', image: '/images/products/tiny-corner/Single workstation.png',
                    description: 'Compact workstation for focused tasks.',
                    features: ['Space Saving', 'Minimal Design', 'Durable']
                },
                {
                    id: 'm-min-2', name: 'Table with Drawer', category: 'Table', price: '$300', image: '/images/products/tiny-corner/Table with drawer.png',
                    description: 'Sleek table with integrated storage.',
                    features: ['Built-in Drawer', 'Clean Lines', 'Sturdy']
                },
                {
                    id: 'm-min-3', name: 'Double Workstation', category: 'Workstation', price: '$450', image: '/images/products/tiny-corner/Double Workstation.png',
                    description: 'Efficient workspace for two.',
                    features: ['Shared Space', 'Collaborative', 'Compact Footprint']
                },
                {
                    id: 'm-min-4', name: 'White Table', category: 'Table', price: '$200', image: '/images/products/tiny-corner/White Table.png',
                    description: 'Simple, elegant white table for any room.',
                    features: ['Versatile', 'Easy Clean', 'Modern']
                },
                {
                    id: 'm-min-5', name: 'Double Curved Workstation', category: 'Workstation', price: '$550', image: '/images/products/tiny-corner/Double Curved Workstation.png',
                    description: 'Curved double workstation for maximizing space.',
                    features: ['Ergonomic Curve', 'Spacious', 'Dual Workspace']
                },
                {
                    id: 'm-min-6', name: 'Meeting Table', category: 'Table', price: '$350', image: '/images/products/tiny-corner/Meeting Table.png',
                    description: 'Compact meeting table for small teams.',
                    features: ['Seats 4-6', 'Sturdy Build', 'Simple Design']
                },
                {
                    id: 'm-min-7', name: 'Single Curved Workstation', category: 'Table', price: '$280', image: '/images/products/tiny-corner/Single Curved Workstation.png',
                    description: 'Single curved workstation perfect for corners.',
                    features: ['Corner Fit', 'Modern Look', 'Extra Surface']
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
