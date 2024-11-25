import { headerImage } from '~/assets/images/sample-header';
import { footer } from '~/assets/images/footer';

export const defineIncidentDoc = ({ reportType, incidentData, reportedBy, receivedBy }) => ({
  pageMargins: [72, 120, 72, 90],
  header: {
    image: headerImage,
    width: 600,
    height: 100,
    alignment: 'center',
    margin: [0, 10, 0, 0],
  },
  content: [
    { text: `${reportType}`, style: 'header', margin: [0, 0, 0, 30] },
    {
      table: {
        widths: ['30%', '70%'],
        headerRows: 0,
        body: [
          [
            { text: 'Name of People Involved:', style: 'label', border: [false, false, false, false] },
            { text: `${incidentData.peopleInvolved?.join(', ')}`, style: 'content', border: [false, false, false, false] }
          ],
          [
            { text: 'Witness:', style: 'label', border: [false, false, false, false] },
            { text: `${incidentData.witness}`, style: 'content', border: [false, false, false, false] }
          ],
          [
            { text: 'Date of Incident:', style: 'label', border: [false, false, false, false] },
            { text: `${incidentData.dateOfIncident}`, style: 'content', border: [false, false, false, false] }
          ],
          [
            { text: 'Place of Incident:', style: 'label', border: [false, false, false, false] },
            { text: `${incidentData.placeOfIncident}`, style: 'content', border: [false, false, false, false] }
          ],
          [
            { text: 'Things Involved:', style: 'label', border: [false, false, false, false] },
            { text: `${incidentData.thingsInvolved}`, style: 'content', border: [false, false, false, false] }
          ],
        ]
      },
      layout: {
        hLineWidth: function (i, node) {
          return 0.5;
        },
        vLineWidth: function (i, node) {
          return 0;
        },
        hLineColor: function (i, node) {
          return '#cccccc';
        },
      }
    },
    { text: 'Narrative Report:', style: 'label', margin: [0, 15, 0, 5] },
    {
      text: `${incidentData.narrativeReport}`,
      style: 'content',
      margin: [30, 0, 30, 10],
      alignment: 'justify'
    },
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }] },
    { text: 'Action Taken:', style: 'label', margin: [0, 15, 0, 5] },
    {
      text: `${incidentData.actionTaken || 'Pending'}`,
      style: 'content',
      margin: [30, 0, 30, 10],
      alignment: 'justify'
    },
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }] },
    { text: 'Reason for Action:', style: 'label', margin: [0, 15, 0, 5] },
    {
      text: `${incidentData.reasonOfAction || 'Pending'}`,
      style: 'content',
      margin: [30, 0, 30, 10],
      alignment: 'justify'
    },
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }] },
    { text: 'Additional Notes:', style: 'label', margin: [0, 15, 0, 5] },
    {
      text: `${incidentData.others || 'None'}`,
      style: 'content',
      margin: [30, 0, 30, 10],
      alignment: 'justify'
    },
    { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }] },
    {
      table: {
        widths: ['30%', '70%'],
        headerRows: 0,
        body: [
          [
            { text: 'Date Reported:', style: 'label', border: [false, false, false, false] },
            { text: `${incidentData.dateReported}`, style: 'content', border: [false, false, false, false] }
          ],
          [
            { text: 'Last Modified:', style: 'label', border: [false, false, false, false] },
            { text: `${incidentData.lastModified || 'Not modified'}`, style: 'content', border: [false, false, false, false] }
          ],
          [
            { text: 'Status:', style: 'label', border: [false, false, false, false] },
            { text: `${incidentData.status}`, style: 'content', border: [false, false, false, false] }
          ],
        ]
      },
      layout: {
        hLineWidth: function (i, node) {
          return 0.5;
        },
        vLineWidth: function (i, node) {
          return 0;
        },
        hLineColor: function (i, node) {
          return '#cccccc';
        },
      }
    }
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      alignment: 'center',
    },
    label: {
      bold: true,
      fontSize: 11,
      margin: [0, 10, 0, 10],
    },
    content: {
      fontSize: 11,
      margin: [0, 10, 0, 10],
    }
  },
  footer: (currentPage, pageCount) => {
    return [
      {
        image: footer,
        width: 480,
        alignment: 'center',
        margin: [0, 10, 0, 0]
      },
      {
        text: `FM-OOP-05                                    Rev.: 01                                    ${new Date().toLocaleDateString()}                                       Page ${currentPage} of ${pageCount}                                  Control Number:______`,
        alignment: 'justify',
        margin: [70, 0],
        fontSize: 7,
      },
    ];
  },
});

export const defineAnecdotalDoc = ({ studentData, anecdotalData, associatedReports }) => ({
  pageMargins: [72, 120, 72, 90],
  header: {
    image: headerImage,
    width: 600,
    height: 100,
    alignment: 'center',
    margin: [0, 10, 0, 0],
  },
  content: [
    { text: 'ANECDOTAL REPORT', style: 'header', margin: [0, 0, 0, 0] },
    {
      table: {
        widths: ['30%', '70%'],
        headerRows: 0,
        body: [
          ['Student Name:', `${studentData.firstName} ${studentData.middleName} ${studentData.lastName}`],
          ['Student ID:', studentData.studentId],
          ['Academic Year:', anecdotalData.AY]
        ].map(row => [
          { text: row[0], style: 'label', border: [false, false, false, false] },
          { text: row[1], style: 'content', border: [false, false, false, false] }
        ])
      }
    },
    ...associatedReports.map(rep => [
      {
        text: new Date(rep.datePrepared).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        style: 'subheader',
        margin: [0, 20, 0, 10],
        color: '#1f2937'
      },
      {
        table: {
          widths: ['30%', '70%'],
          headerRows: 0,
          body: [
            ['Date of Incident:', new Date(rep.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })],
            ['Purpose:', rep.purpose],
            ['Witnesses:', rep.witnesses.join(', ')],
            ['Place of Incident:', rep.placeOfIncident],
            ['Things Involved:', rep.thingsInvolved],
          ].map(row => [
            { text: row[0], style: 'label', border: [false, false, false, false] },
            { text: row[1], style: 'content', border: [false, false, false, false] }
          ])
        }
      },
      { text: 'Details:', style: 'label', margin: [0, 15, 0, 5] },
      { text: rep.details, style: 'content', margin: [30, 0, 30, 15] },
      { text: rep.isReportedByGuidance ? 'Remarks from the Guidance Office:' : 'Adviser\'s Remarks:', 
        style: 'label', margin: [0, 15, 0, 5] },
      { text: rep.remarks, style: 'content', margin: [30, 0, 30, 15] }
    ]).flat()
  ],
  styles: {
    header: { fontSize: 20, bold: true, alignment: 'center' },
    subheader: { fontSize: 15, bold: true },
    label: { bold: true, fontSize: 11, margin: [0, 10, 0, 10] },
    content: { fontSize: 11, margin: [0, 10, 0, 10] }
  },
  footer: {
    image: footer,
    width: 480,
    alignment: 'center',
    margin: [0, 10, 0, 0]
  }
});