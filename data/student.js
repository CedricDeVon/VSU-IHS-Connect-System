export const  getEnrolledStudentsCount = ()=> {
    return (student.filter((stud)=> stud.isEnrolled)).length;
};

export function calculateAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

export const student = [
    {
        studentId: '22-1-10110',
        firstName: 'Try unenrolled',
        lastName: 'Gomex',
        middleName: 'Perex',
        suffix: '',
        gender: 'Male',
        address: 'Albuera, Leyte',
        contactNum: '09268921698',
        isEnrolled: false,
        incidentDocIDs: [],
        birthDate: '2004-01-01',
        profilePic: null,
        age: calculateAge('2004-01-01'),
        sectionID: '',
        anecdotalDocID: null
    },
    {
        studentId: '22-1-10075',
        firstName: 'Jade',
        lastName: 'Lopez',
        middleName: 'Santos',
        suffix: '',
        gender: 'Male',
        address: 'Baybay, Leyte',
        contactNum: '09354219876',
        isEnrolled: true,
        incidentDocIDs: ['incidentID1'],
        birthDate: '2003-05-15',
        profilePic: null,
        age: calculateAge('2003-05-15'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10075'
    },
    {
        studentId: '22-1-10076',
        firstName: 'Jedo',
        lastName: 'Reyes',
        middleName: 'Marcos',
        suffix: '',
        gender: 'Male',
        address: 'Ormoc, Leyte',
        contactNum: '09471635429',
        isEnrolled: true,
        incidentDocIDs: ['incidentID1'],
        birthDate: '2002-08-20',
        profilePic: null,
        age: calculateAge('2002-08-20'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10076'
    },
    {
        studentId: '22-1-10077',
        firstName: 'Pawix',
        lastName: 'Mendez',
        middleName: 'Teves',
        suffix: '',
        gender: 'Male',
        address: 'Carigara, Leyte',
        contactNum: '09753168423',
        isEnrolled: true,
        incidentDocIDs: [],
        birthDate: '2001-12-05',
        profilePic: null,
        age: calculateAge('2001-12-05'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10077'
    },
    {
        studentId: '22-1-10078',
        firstName: 'Pawiz',
        lastName: 'Buenaventura',
        middleName: 'Rivera',
        suffix: '',
        gender: 'Female',
        address: 'Tacloban, Leyte',
        contactNum: '09523176481',
        isEnrolled: true,
        incidentDocIDs: ['incidentID2'],
        birthDate: '2003-03-10',
        profilePic: null,
        age: calculateAge('2003-03-10'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10078'
    },
    {
        studentId: '22-1-10079',
        firstName: 'Vinz',
        lastName: 'Dela Cruz',
        middleName: 'Morales',
        suffix: '',
        gender: 'Male',
        address: 'Abuyog, Leyte',
        contactNum: '09172849567',
        isEnrolled: true,
        incidentDocIDs: ['incidentID3', 'incidentID4', 'incidentID5'],
        birthDate: '2002-07-25',
        profilePic: null,
        age: calculateAge('2002-07-25'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10079'
    },
    {
        studentId: '22-1-10389',
        firstName: 'Venje',
        lastName: 'Ba nana',
        middleName: 'Moral',
        suffix: '',
        gender: 'Male',
        address: 'Abuyog, Leyte',
        contactNum: '09172849577',
        isEnrolled: false,
        incidentDocIDs: [],
        birthDate: '2004-07-25',
        profilePic: null,
        age: calculateAge('2004-07-25'),
        sectionID: '',
        anecdotalDocID: null
    },
    {
        studentId: '22-1-10080',
        firstName: 'Alex',
        lastName: 'Torres',
        middleName: 'Diaz',
        suffix: '',
        gender: 'Male',
        address: 'Palompon, Leyte',
        contactNum: '09324567189',
        isEnrolled: true,
        incidentDocIDs: ['incidentID4', 'incidentID5', 'incidentID6', 'incidentID7', 'incidentID8'],
        birthDate: '2001-11-30',
        profilePic: null,
        age: calculateAge('2001-11-30'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10080'
    },
    {
        studentId: '22-1-10081',
        firstName: 'Sam',
        lastName: 'Gonzalez',
        middleName: 'Ramos',
        suffix: '',
        gender: 'Female',
        address: 'Dulag, Leyte',
        contactNum: '09451673289',
        isEnrolled: true,
        incidentDocIDs: ['incidentID4', 'incidentID9'],
        birthDate: '2003-06-18',
        profilePic: null,
        age: calculateAge('2003-06-18'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10081'
    },
    {
        studentId: '22-1-10082',
        firstName: 'Lisa',
        lastName: 'Hernandez',
        middleName: 'Palma',
        suffix: '',
        gender: 'Female',
        address: 'Kananga, Leyte',
        contactNum: '09671234982',
        isEnrolled: true,
        incidentDocIDs: ['incidentID5', 'incidentID6', 'incidentID7', 'incidentID8', 'incidentID9', 'incidentID10', 'incidentID11'],
        birthDate: '2002-09-14',
        profilePic: null,
        age: calculateAge('2002-09-14'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10082'
    },
    {
        studentId: '22-1-10083',
        firstName: 'Chris',
        lastName: 'Garcia',
        middleName: 'Iglesias',
        suffix: '',
        gender: 'Male',
        address: 'Barugo, Leyte',
        contactNum: '09521839475',
        isEnrolled: true,
        incidentDocIDs: ['incidentID5', 'incidentID12', 'incidentID13', 'incidentID14'],
        birthDate: '2001-04-22',
        profilePic: null,
        age: calculateAge('2001-04-22'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10083'
    },
    {
        studentId: '22-1-10084',
        firstName: 'Mark',
        lastName: 'Espinosa',
        middleName: 'Valdez',
        suffix: '',
        gender: 'Male',
        address: 'Calubian, Leyte',
        contactNum: '09271836254',
        isEnrolled: true,
        incidentDocIDs: ['incidentID6', 'incidentID7', 'incidentID8', 'incidentID9', 'incidentID10', 'incidentID11', 'incidentID12', 'incidentID13', 'incidentID14'],
        birthDate: '2003-01-30',
        profilePic: null,
        age: calculateAge('2003-01-30'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10084'
    },
    {
        studentId: '22-1-10085',
        firstName: 'Emily',
        lastName: 'Robles',
        middleName: 'Villanueva',
        suffix: '',
        gender: 'Female',
        address: 'Carigara, Leyte',
        contactNum: '09162573849',
        isEnrolled: true,
        incidentDocIDs: ['incidentID7', 'incidentID15', 'incidentID16', 'incidentID17', 'incidentID18', 'incidentID19'],
        birthDate: '2002-05-05',
        profilePic: null,
        age: calculateAge('2002-05-05'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10085'
    },
    {
        studentId: '22-1-10086',
        firstName: 'Jake',
        lastName: 'Aguilar',
        middleName: 'Mendoza',
        suffix: '',
        gender: 'Male',
        address: 'Alangalang, Leyte',
        contactNum: '09341527896',
        isEnrolled: true,
        incidentDocIDs: ['incidentID7'],
        birthDate: '2001-08-12',
        profilePic: null,
        age: calculateAge('2001-08-12'),
        sectionID: 'sectionid1',
        anecdotalDocID: 'ANEC-2024-10086'
    },
    {
        studentId: '22-1-10087',
        firstName: 'Sarah',
        lastName: 'Panganiban',
        middleName: 'Reyes',
        suffix: '',
        gender: 'Female',
        address: 'Palo, Leyte',
        contactNum: '09231245789',
        isEnrolled: true,
        incidentDocIDs: ['incidentID8'],
        birthDate: '2003-11-09',
        profilePic: null,
        age: calculateAge('2003-11-09'),
        sectionID: 'sectionid12',
        anecdotalDocID: 'ANEC-2024-10087'
    },
    {
        studentId: '22-1-10088',
        firstName: 'Marco',
        lastName: 'Santos',
        middleName: 'Rivera',
        suffix: '',
        gender: 'Male',
        address: 'Tacloban City',
        contactNum: '09123456789',
        isEnrolled: true,
        incidentDocIDs: [],
        birthDate: '2002-08-15',
        profilePic: null,
        age: calculateAge('2002-08-15'),
        sectionID: 'sectionid26',
        anecdotalDocID: 'ANEC-2024-10088'
    },
    {
        studentId: '22-1-10090',
        firstName: 'Owen',
        lastName: 'Delos Santos',
        middleName: 'Rivera',
        suffix: '',
        gender: 'Male',
        address: 'Mahaplag, Leyte',
        contactNum: '09678423567',
        isEnrolled: true,
        incidentDocIDs: ['incidentID9'],
        birthDate: '2003-04-10',
        profilePic: null,
        age: calculateAge('2003-04-10'),
        sectionID: 'sectionid12',
        anecdotalDocID: 'ANEC-2024-10090'
    },
    {
        studentId: '22-1-10091',
        firstName: 'Sofia',
        lastName: 'Reyes',
        middleName: 'Castillo',
        suffix: '',
        gender: 'Female',
        address: 'Baybay, Leyte',
        contactNum: '09452167345',
        isEnrolled: true,
        incidentDocIDs: ['incidentID10'],
        birthDate: '2002-12-01',
        profilePic: null,
        age: calculateAge('2002-12-01'),
        sectionID: 'sectionid12',
        anecdotalDocID: 'ANEC-2024-10091'
    },
    {
        studentId: '22-1-10092',
        firstName: 'Nora',
        lastName: 'Aquino',
        middleName: 'Padilla',
        suffix: '',
        gender: 'Female',
        address: 'Hilongos, Leyte',
        contactNum: '09281567324',
        isEnrolled: true,
        incidentDocIDs: ['incidentID11'],
        birthDate: '2001-03-15',
        profilePic: null,
        age: calculateAge('2001-03-15'),
        sectionID: 'sectionid12',
        anecdotalDocID: 'ANEC-2024-10092'
    },
    {
        studentId: '22-1-10093',
        firstName: 'Paul',
        lastName: 'Santos',
        middleName: 'Arce',
        suffix: '',
        gender: 'Male',
        address: 'Hindang, Leyte',
        contactNum: '09781526734',
        isEnrolled: true,
        incidentDocIDs: ['incidentID11'],
        birthDate: '2002-07-07',
        profilePic: null,
        age: calculateAge('2002-07-07'),
        sectionID: 'sectionid14',
        anecdotalDocID: 'ANEC-2024-10093'
    },
    {
        studentId: '22-1-10094',
        firstName: 'Samantha',
        lastName: 'Villamor',
        middleName: 'De Vera',
        suffix: '',
        gender: 'Female',
        address: 'Carigara, Leyte',
        contactNum: '09315678942',
        isEnrolled: true,
        incidentDocIDs: ['incidentID12'],
        birthDate: '2003-10-20',
        profilePic: null,
        age: calculateAge('2003-10-20'),
        sectionID: 'sectionid14',
        anecdotalDocID: 'ANEC-2024-10094'
    },
    {
        studentId: '22-1-10095',
        firstName: 'Brian',
        lastName: 'Sandoval',
        middleName: 'Flores',
        suffix: '',
        gender: 'Male',
        address: 'Hilongos, Leyte',
        contactNum: '09122367891',
        isEnrolled: true,
        incidentDocIDs: ['incidentID13'],
        birthDate: '2001-01-18',
        profilePic: null,
        age: calculateAge('2001-01-18'),
        sectionID: 'sectionid14',
        anecdotalDocID: 'ANEC-2024-10095'
    },
    {
        studentId: '22-1-10096',
        firstName: 'Alexa',
        lastName: 'Perez',
        middleName: 'Garcia',
        suffix: '',
        gender: 'Female',
        address: 'Abuyog, Leyte',
        contactNum: '09231987654',
        isEnrolled: true,
        incidentDocIDs: ['incidentID14'],
        birthDate: '2002-11-05',
        profilePic: null,
        age: calculateAge('2002-11-05'),
        sectionID: 'sectionid14',
        anecdotalDocID: 'ANEC-2024-10096'
    },
    {
        studentId: '22-1-10097',
        firstName: 'Ivan',
        lastName: 'Morales',
        middleName: 'Navarro',
        suffix: '',
        gender: 'Male',
        address: 'Bato, Leyte',
        contactNum: '09421346789',
        isEnrolled: true,
        incidentDocIDs: ['incidentID15'],
        birthDate: '2003-02-25',
        profilePic: null,
        age: calculateAge('2003-02-25'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10097'
    },
    {
        studentId: '22-1-10098',
        firstName: 'Lucia',
        lastName: 'Santiago',
        middleName: 'Reyes',
        suffix: '',
        gender: 'Female',
        address: 'Tolosa, Leyte',
        contactNum: '09678123456',
        isEnrolled: true,
        incidentDocIDs: ['incidentID16'],
        birthDate: '2001-09-30',
        profilePic: null,
        age: calculateAge('2001-09-30'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10098'
    },
    {
        studentId: '22-1-10099',
        firstName: 'Miguel',
        lastName: 'Carreon',
        middleName: 'Domingo',
        suffix: '',
        gender: 'Male',
        address: 'Isabel, Leyte',
        contactNum: '09341786234',
        isEnrolled: true,
        incidentDocIDs: ['incidentID17'],
        birthDate: '2002-04-12',
        profilePic: null,
        age: calculateAge('2002-04-12'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10099'
    },
    {
        studentId: '22-1-10100',
        firstName: 'Patricia',
        lastName: 'Alvarado',
        middleName: 'Esquivel',
        suffix: '',
        gender: 'Female',
        address: 'Tanauan, Leyte',
        contactNum: '09753412678',
        isEnrolled: true,
        incidentDocIDs: ['incidentID18'],
        birthDate: '2003-07-22',
        profilePic: null,
        age: calculateAge('2003-07-22'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10100'
    },
    {
        studentId: '22-1-10101',
        firstName: 'Gerald',
        lastName: 'Franco',
        middleName: 'Dela Rosa',
        suffix: '',
        gender: 'Male',
        address: 'MacArthur, Leyte',
        contactNum: '09287456321',
        isEnrolled: true,
        incidentDocIDs: ['incidentID19'],
        birthDate: '2001-11-09',
        profilePic: null,
        age: calculateAge('2001-11-09'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10101'
    },
    {
        studentId: '22-1-10102',
        firstName: 'Theresa',
        lastName: 'Ponce',
        middleName: 'Salazar',
        suffix: '',
        gender: 'Female',
        address: 'Villaba, Leyte',
        contactNum: '09421354786',
        isEnrolled: true,
        incidentDocIDs: ['incidentID20'],
        birthDate: '2003-04-15',
        profilePic: null,
        age: calculateAge('2003-04-15'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10102'
    },
    {
        studentId: '22-1-10103',
        firstName: 'Enrico',
        lastName: 'Manlapig',
        middleName: 'Suarez',
        suffix: '',
        gender: 'Male',
        address: 'Capoocan, Leyte',
        contactNum: '09341527896',
        isEnrolled: true,
        incidentDocIDs: ['incidentID21'],
        birthDate: '2002-11-22',
        profilePic: null,
        age: calculateAge('2002-11-22'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10103'
    },
    {
        studentId: '22-1-10104',
        firstName: 'James',
        lastName: 'Estrada',
        middleName: 'Villanueva',
        suffix: '',
        gender: 'Male',
        address: 'Bato, Leyte',
        contactNum: '09751238467',
        isEnrolled: true,
        incidentDocIDs: ['incidentID13'],
        birthDate: '2003-01-10',
        profilePic: null,
        age: calculateAge('2003-01-10'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10104'
    },
    {
        studentId: '22-1-10105',
        firstName: 'Leah',
        lastName: 'Cruz',
        middleName: 'Ferrer',
        suffix: '',
        gender: 'Female',
        address: 'Sogod, Southern Leyte',
        contactNum: '09365278491',
        isEnrolled: true,
        incidentDocIDs: ['incidentID14'],
        birthDate: '2002-08-05',
        profilePic: null,
        age: calculateAge('2002-08-05'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10105'
    },
    {
        studentId: '22-1-10106',
        firstName: 'John',
        lastName: 'Abad',
        middleName: 'Mendoza',
        suffix: '',
        gender: 'Male',
        address: 'MacArthur, Leyte',
        contactNum: '09451237894',
        isEnrolled: true,
        incidentDocIDs: ['incidentID15'],
        birthDate: '2003-06-25',
        profilePic: null,
        age: calculateAge('2003-06-25'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10106'
    },
    {
        studentId: '22-1-10107',
        firstName: 'Grace',
        lastName: 'Bautista',
        middleName: 'Pascua',
        suffix: '',
        gender: 'Female',
        address: 'Hilongos, Leyte',
        contactNum: '09284317652',
        isEnrolled: true,
        incidentDocIDs: ['incidentID16'],
        birthDate: '2002-12-10',
        profilePic: null,
        age: calculateAge('2002-12-10'),
        sectionID: 'sectionid16',
        anecdotalDocID: 'ANEC-2024-10107'
    },
    {
        studentId: '22-1-10108',
        firstName: 'Ryan',
        lastName: 'Fernandez',
        middleName: 'Marquez',
        suffix: '',
        gender: 'Male',
        address: 'Baybay, Leyte',
        contactNum: '09745321687',
        isEnrolled: true,
        incidentDocIDs: ['incidentID17'],
        birthDate: '2003-03-30',
        profilePic: null,
        age: calculateAge('2003-03-30'),
        sectionID: 'sectionid26',
        anecdotalDocID: 'ANEC-2024-10108'
    },
    {
        studentId: '22-1-10109',
        firstName: 'Cindy',
        lastName: 'Gonzales',
        middleName: 'Cruz',
        suffix: '',
        gender: 'Female',
        address: 'Villaba, Leyte',
        contactNum: '09561234789',
        isEnrolled: true,
        incidentDocIDs: ['incidentID18'],
        birthDate: '2002-09-18',
        profilePic: null,
        age: calculateAge('2002-09-18'),
        sectionID: 'sectionid26',
        anecdotalDocID: 'ANEC-2024-10109'
    },
    {
        studentId: '22-1-10110',
        firstName: 'Miguel',
        lastName: 'Rivera',
        middleName: 'Santos',
        suffix: '',
        gender: 'Male',
        address: 'Jaro, Leyte',
        contactNum: '09435217684',
        isEnrolled: true,
        incidentDocIDs: ['incidentID19'],
        birthDate: '2003-07-12',
        profilePic: null,
        age: calculateAge('2003-07-12'),
        sectionID: 'sectionid26',
        anecdotalDocID: 'ANEC-2024-10110'
    },
    {
        studentId: '22-1-10111',
        firstName: 'Eunice',
        lastName: 'Torralba',
        middleName: 'Villamor',
        suffix: '',
        gender: 'Female',
        address: 'Abuyog, Leyte',
        contactNum: '09675218439',
        isEnrolled: true,
        incidentDocIDs: ['incidentID20'],
        birthDate: '2002-11-05',
        profilePic: null,
        age: calculateAge('2002-11-05'),
        sectionID: 'sectionid26',
        anecdotalDocID: 'ANEC-2024-10111'
    },
    {
        studentId: '22-1-10112',
        firstName: 'Roland',
        lastName: 'Zabala',
        middleName: 'Silva',
        suffix: '',
        gender: 'Male',
        address: 'Ormoc City, Leyte',
        contactNum: '09123846572',
        isEnrolled: true,
        incidentDocIDs: ['incidentID21'],
        birthDate: '2003-02-20',
        profilePic: null,
        age: calculateAge('2003-02-20'),
        sectionID: 'sectionid26',
        anecdotalDocID: 'ANEC-2024-10112'
    },
    {
        studentId: '22-1-10113',
        firstName: 'Bea',
        lastName: 'Lim',
        middleName: 'Salazar',
        suffix: '',
        gender: 'Female',
        address: 'Isabel, Leyte',
        contactNum: '09238174625',
        isEnrolled: true,
        incidentDocIDs: ['incidentID22'],
        birthDate: '2002-10-15',
        profilePic: null,
        age: calculateAge('2002-10-15'),
        sectionID: 'sectionid26',
        anecdotalDocID: 'ANEC-2024-10113'
    }
];