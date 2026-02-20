import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 14.99,
        rating: 4.8,
        category: 'Fiction',
        description: 'A story of wealth, love, and the American Dream in the 1920s.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR5UGdbNkFBF3PFPtXgWiWt3jjsdRa19WqSv88ng3YmXA0zfvuKnvzf4f60FsTUNqa38xgmjLT7Gsq80Abczr8hpv-__8YfW9sIeAWRrCh7qLhwgIobx1Wcbsv2rlZcFS_sW1lZnxfz-oOqw2PD0DzSajtHADaRO1wGFN2jiBFn1vrSdF9CZPjjZcQcFQUNHaTh2YGDBCsb_FxRTXin-1AnUwb1n9xpdlL65rq2LKDqFrdP5X3pYp-sguehCQ1AKwmTUUpjLeU-S0',
        publishedYear: 1925,
        featured: true,
    },
    {
        title: 'Becoming',
        author: 'Michelle Obama',
        price: 18.50,
        rating: 4.9,
        category: 'Non-fiction',
        description: 'An intimate memoir by the former First Lady of the United States.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhOoeyLUIFqy6OJI3Y2froqyY2grI-hB-RUZ3_G8TjX5egvC_iJXijMnQ_TSG2GqdkgNr7ixuteN9uFV7eJnctFyhJSyxbFBJp2hbASOQEhAenL_Zcodo2ARSW1ZcV3v8LZzpKN6y3lhPJINXtUSntnnOSbsFosnuRy2CBv4DtXhvwZBdoDkchgsenNFDZ-y4CeNpvOHBgwNxxj1oAWeF9WoIj2L-AITJKqTH2TH6Ez4PaAoIcRKT-WqhAsMEm5eHoQm04h0QP6o0',
        publishedYear: 2018,
        featured: true,
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 12.00,
        rating: 4.7,
        category: 'Fantasy',
        description: 'A great modern classic and the prelude to The Lord of the Rings.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdJqxaC0kK1GusWz8gO2DJkAWUR0S3tsQsLVM3vgJbw9yfEAQVtUlsB1kRogyfsllC5TN9iZ5MKj1-7TuCkeI4r2q_T633TXSOMtPd_dxHNBX7r27e33njW2Fkp1uzn2__8C4k00yMBgmgAsod4GwqQNKC2BmJx6drPp17ga2vBodOy7nqz23ju6vCyTPGYc-d3M1f3bvDZyu93OFscqCwoUmV8fgVB7aNagfSUAcreuhMDaJCX3bNzRL5rf37xp1naH77zqLSdzI',
        publishedYear: 1937,
        featured: true,
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 16.00,
        rating: 5.0,
        category: 'Self-help',
        description: 'An easy and proven way to build good habits and break bad ones.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCREyvmby-YKCD2g-ASgXdgVHy5qdlVus5YvEw2yrvLtw2vBANlRsw9lFXCaj0iyzX6Zswg-_NHq5vEEAUrDBbZEiTI-PZ_R5TDWgm78GsJsM1L-jjFX0CH-bt-agYpWRDL3XBtvX3Rb79RoNjLxVWKdQlIMt0ba_uKGteAgVqGhPptJ5cBUdRlEhBLNtfDi-6LcRRhwMbuEZkvPh4PmXj4AahoYqPaJEP8YUBA2IcMFteZ4ysclfOg3_AKohBzHde6111KKWNUPms',
        publishedYear: 2018,
        featured: true,
    },
    {
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        price: 22.00,
        rating: 4.9,
        category: 'Fiction',
        description: 'A lone astronaut must save the earth from disaster.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd488Y2QA32OXW-8eIXCwxEHAB4QS51hOfQf1XCWzeBoUm9D27Qu-WUUB9SXx2UNF_1CeJM9e6BqwK_rXInos_59fLxJfze8ApjcWck6TPKNBWW01o8U8yZW2IuyH3CgxNg65WPTeAGrJsW2mF6oH72OGzraUl22AVjGP-5QIN0CT_yb0TtFqGHTj2P9m3z1hF-93dNHtmPyFocWKoTWbuW4MHu0h6Pc_s5VUA0GKTEoS4Tg_NdLGjQqQaiJzfDTUI5BSKUfmIYNo',
        publishedYear: 2021,
        featured: true,
    },
    {
        title: 'The Night Circus',
        author: 'Erin Morgenstern',
        price: 15.99,
        rating: 4.6,
        category: 'Fantasy',
        description: 'A fierce competition is underway in a mysterious circus.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAckaHzT6fP2u0EXz5N1QyUKTbTFEdCYNhZtwydtSs7sadSMR2xCJYKFDjQ2O-rULSpy-HCdGuHHj6xspIaDSV5FUDgQEEhxSRnOQp7m3e4vRFGn_5K75itLvEjZ13lpIFsLBXKAwez6T6ufMkN-toiw5WRCpliubXpubUDZ3VLc1hQuReOOx-Vo8uBYIKnTk1_E8TyjANmHD21wOzrZHETyYlAlL6h3iFPhlVTG03ICGYXsI1-pLDhqIpjgOqLMjPQ88QZyeopaaY',
        publishedYear: 2011,
        featured: true,
    },
    {
        title: 'Educated',
        author: 'Tara Westover',
        price: 17.00,
        rating: 4.8,
        category: 'Non-fiction',
        description: 'A memoir about a woman who leaves her survivalist family to pursue an education.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjFn4mNzXdq8G4g7BUqAmt74flIBTx03POyiBCSM5uMLMijlzYMVULII38kwPgTcvEtcCkw4nVM9-wk5-AqLGvU3NThlMj8es1B1aZu41PeyOYoKEm14--0GLiXm0C0B07gdhzflAv4Zl6MzphQyHYTYdR0ZAmuJH3tqK1PqJWgoUfnM9fGl21O5VsOunmlbtv39NiHR08FJto_gn5sd-2hcs_pwi3gwogK05a7c6UIDnJOiCKUnp4cBI5xfBd43P-PlJml347O6Q',
        publishedYear: 2018,
        featured: false,
    },
    {
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        price: 13.50,
        rating: 4.7,
        category: 'Fiction',
        description: 'A young girl raised in a marsh becomes a suspect in a murder.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2I2YIzsDmVFydB_lmOVhik-Xut8vggLesayWVboXAHV0bYnZQTm8uACHvOkcg3ibeS7OqU9BOVoRtZBYQ9_B15JDXPu_A1UgqAlzztMjYrAjyYnuOMV47-ebXAp5zLkpuZAJ6_0Jhbnho9H5Hc6gRPWIw_L5GvJDoaZa9WICXBWKJmIn-JL4CrIEFww86E9COAwNWbMDYzhdlzuLaSU7uXRqS1lnjQT7H0NiWENctMLOAO4MsJ9LywTjJUB2g6I4Nj3o9b3aXL6Y',
        publishedYear: 2018,
        featured: false,
    },
    {
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        price: 15.00,
        rating: 4.5,
        category: 'Fiction',
        description: 'A woman shoots her husband and then never speaks another word.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLjKtTT02ooAf0xKkG-hJOUw0dW-yzmj9LiqVEeD-mk1Ccq2ZgpWrEPlQc07c1HyJVNBm8h4z1yfHiUA_YC6rzDYbLIdvQLnh5aZOLQTstP-YMyHK4MTQjfQxSEG5Jl6BNZTexsUU-fVgbsfxxMpa0jaCaQp71YhZaSxAgwXnv27jh9hOpyQUTsJN0bN_XPcgSuDkDlxfVSXYqUwz0hj-2tiLXxZDMKNmgZY499VBOjheQA9orb7uatPV99JoRcfx7rhiioKeEW1o',
        publishedYear: 2019,
        featured: false,
    },
    {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        price: 19.99,
        rating: 4.8,
        category: 'Non-fiction',
        description: 'A brief history of humankind.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP84y1I5ghF34_Onni1ept7hCWY1wU7nInWFIqBgZugbmBkjGAZHD9cGLej7-f0RtMVFBcKt9yaq2mtHZtl-62q7nApXYcQWHghMJBJvrv4vsLtpLX34FK208mWI3F3aPgHJffdpUPlv3S2qNoJO0YobAYHnZ4lX5XcTcltqH_E4H43HoX9R25d8G3_tXxTKJzsvhdsiZuQG2Yo8AgNXclEAr7w5ETQBM8D2kbABmM7oYWHKQwA5sE1eQPH0NFg5jBYq5TKaGMdXs',
        publishedYear: 2011,
        featured: false,
    },
    {
        title: 'Normal People',
        author: 'Sally Rooney',
        price: 14.00,
        rating: 4.3,
        category: 'Romance',
        description: 'A story of mutual fascination, friendship, and love.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiagw33v_O-Rb4hUaxJdewoVBU9cN3vdTthjRAApwdniQLJKZuRi0phFJLST_mYkrjxORAZFYf2hiF2MsYbv64TL9hpa3SRWiWN6gbqFcHN7LlHffjc3OS7i8C1NhuQ6OVxZWegU_Jutj9W_xu7FHHfPtNBvWjY32JKqjtAYR57YSEFN4GeKVMVrGYCtBeKLi0fuIzAGRZd6jww51xbfnfr3HjLNCGDZ182XETRCb4k2LyEhYqElJQVNl1c0ajW3qAUrrvB6sq6DI',
        publishedYear: 2018,
        featured: false,
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        price: 11.99,
        rating: 4.7,
        category: 'Fantasy',
        description: 'A fable about following your dreams.',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbEh4y9Ym7uWItrBNdL7uDFrtL5OVHUq6jvXbZyQcF8JVwYYYoMWnAxaDYH8fs1hH9q1Cx3wq-TJ_kT6ZFpQMREHGsgTXopBgRFl5iLaebD_zzOxRaHrYHpFLcQIMO5Pw9xExUf0k5nyfPEC_iZhIWS-4iDQlS8mLnuYXWo5ES1vkSqx-fgyDoMcAnH5DOhpnFP87-l3y8fU4XVvE5EA4F0t3xLr2RK50UewUawWXEsmrOnEICYVhFNweM4ZaXxTV5dqfA_06Bhb0',
        publishedYear: 1988,
        featured: false,
    }
];

// Add more mock books to reach ~25
const categories = ['Fiction', 'Non-fiction', 'Fantasy', 'Romance', 'Kids', 'Self-help'];
for (let i = 1; i <= 15; i++) {
    books.push({
        title: `Extra Book ${i}`,
        author: `Author ${i}`,
        price: 10 + Math.random() * 20,
        rating: 4 + Math.random(),
        category: categories[i % categories.length],
        description: `A generic description for book ${i}. It is full of interesting details.`,
        coverImage: `https://picsum.photos/seed/book${i}/400/600`,
        publishedYear: 2000 + i,
        featured: false,
    });
}

async function main() {
    console.log('Start seeding...');
    await prisma.book.deleteMany();
    for (const b of books) {
        const book = await prisma.book.create({
            data: b,
        });
        console.log(`Created book with id: ${book.id}`);
    }
    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
