<!--This is under experiment and lacks the right header
:this'll automatically display an iframe of document when created
:this needs only a 'incidentReportID' as a parameter
:this will only work properly when there is an initial report sent by the adviser thru the system
If we'll have feature where a GF can make an incident report directly without digital initial report,
then we can modify this code to accept the name of the reporter directly-->

<template>
  <div id="incident-display-container">
    <!-- The iframe will be appended here -->
  </div>
</template>

<script>
import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { headerImage } from '~/assets/images/sample-header';
import { footer } from '~/assets/images/footer';
import { incidentReport } from '~/data/incident';
import { Admin } from '~/data/admin';
import { initialReport } from '~/data/initialReport';
import { adviser } from '~/data/adviser';


export default {

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    incidentReportID: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
    incdReport:{},
    reportType: 'INCIDENT REPORT',
    receivedBy: `${(Admin.firstName).toUpperCase()} ${(Admin.middleName).charAt(0).toUpperCase()+'.'} ${(Admin.lastName).toUpperCase()}`,
    reportedBY: '',
 
    };
  },

  async created(){
    await this.initIncidentByID(this.incidentReportID);
    await this.getReporter(this.incidentReportID);
    this.displayPDF();

  },

  computed: {

    defineIncidentDoc(){
      return {
      pageMargins: [72,120,72,90],
      header:
      {
        image: headerImage,
        width: 500,
        height: 80,
        alignment: 'center',
        margin: [0,20,0,0],
      },
      content: [
        
        [
          { text: `${this.reportType}`, style: 'header', margin:[0,0,0,30]},
        ],
        {
          columns: 
          [
          {width:'35%', text: 'Name of People Involved:', style: 'label' },
        //  {width:'5%', text:''},
          {width: '65%', text: `${this.incdReport.peopleInvolved.join(', ')}`, style: 'content', alignment: 'center' },
          ],
        },
        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },
        {
          columns:
          [
          {width: '30%', text: 'Witness:', style: 'label' },
          {width:'5%', text:''},
          {width:'65%', text: `${this.incdReport.witness}`, style: 'content', alignment: 'center' },
          ],
        },
        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },
        {
          columns:
          [
          {width: '30%', text: 'Date of Incident:', style: 'label' },
          {width:'5%', text:''},
          {width:'65%', text: `${this.incdReport.dateOfIncident}`, style: 'content', alignment: 'center'  },
          ],
        }, 
        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },
        {
          columns:
          [
          {width: '30%', text: 'Date Reported:', style: 'label' },
          {width:'5%', text:''},
          {width: '65%', text: `${this.incdReport.dateReported}`, style: 'content', alignment: 'center'  },
          ],
        },
        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },
        {
          columns:
          [
          {width:'30%', text: 'Place of Incident:', style: 'label' },
          {width:'5%', text:''},
          {width:'65%', text: `${this.incdReport.placeOfIncident}`, style: 'content', alignment: 'center'  },
          ],
        },
        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },
        {
          columns:
          [
          {width:'30%', text: 'Thing/s Involved:', style: 'label' },
          {width:'5%', text:''},
          {width: '65%', text: `${this.incdReport.thingsInvolved}`, style: 'content', alignment: 'center'  },
          ],
        },
        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },

          {text: 'Narrative Report:', style: 'label' },
          {text: `${this.incdReport.narrativeReport}`, style: 'content', alignment: 'left', margin: [5, 0, 0, 0] },

        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },
        {
          columns:
          [
          { width:'30%', text: 'Action taken:', style: 'label' },
          {width:'5%', text:''},
          { width:'65%', text: `${this.incdReport.actionTaken}`, style: 'content', alignment: 'center'  },
          ],
        },
        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },
        {
          columns:
          [
          {width: '30%', text: 'Reason Why Action Was Taken:', style: 'label' },
          {width:'5%', text:''},
          { width: '65%', text: `${this.incdReport.reasonOfAction}`, style: 'content', alignment: 'center'  },
          ],
        },
        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },
        {
          columns:
          [
          { width: '30%', text: 'Others \n(filled by the Disciplinary Action Commitee):', style: 'label' },
          {width:'5%', text:''},
          { width:'65%', text: `${this.incdReport.others}`, style: 'content', alignment: 'center'  },
          ],
        },
        {
          canvas: [{ type: 'line', x1: 0, y1: 0, x2: 460, y2: 0, lineWidth: 0.5, lineColor: '#cccccc' }]
        },

        {
          columns:
           [
                { width: '25%', text: 'Reported by: ', style: 'label', margin: [0, 50, 0, 0] },
                {
                  width: '40%',
                  stack: [
                    {
                      text: `${this.reportedBy}`,
                      style: 'content',
                      alignment: 'center',
                      margin: [0, 0, 0, 0]
                    },
                    {
                      text: 'Grade 7 "Petunia" Adviser',
                      style: 'content',
                      alignment: 'center',
                      margin: [0, 0, 0, 0]
                    }
                  ],
                  margin: [0, 60, 0, 0]
                },
                {width:'35%', text: ''}
              ]
        },
        {
          columns:
           [
                { width: '25%', text: 'Report received by: ', style: 'label', margin: [0, 40, 0, 0] },
                {
                  width: '40%',
                  stack: [
                    {
                      text: `${this.receivedBy}`,
                      style: 'content',
                      alignment: 'center',
                      margin: [0, 0, 0, 0]
                    },
                    {
                      text: 'Guidance Facilitator',
                      style: 'content',
                      alignment: 'center',
                      margin: [0, 0, 0, 0]
                    }
                  ],
                  margin: [0, 40, 0, 0]
                },
                {width:'35%', text: ''}
              ]
        },
      

        
      ],
      styles: {
        header: {
          fontSize: 15,
          bold: true,
          alignment: 'center',
   

        },
        content: {
          margin: [0,10,0,10],
          fontSize: 11,
          
        
        },
        label:{
          bold: true,
          fontsize: 11,
          margin:[0,10,0,10],
          width: 85,
       
        },

      },

      footer: (currentPage, pageCount,) => {
        return [
          {
            image: footer,
            width: 480,
            alignment: 'center',
            margin: [0,10,0,0]
          },
          {
            text:`FM-OOP-05                                    Rev.: 01                                    ${new Date().toLocaleDateString()}                                       Page ${currentPage} of ${pageCount}                                  Control Number:______`,
            alignment: 'justify',
            margin: [70, 0],
            fontSize: 7,
            
          },
        ];
      },
    };
   
    },

  },


  methods: {

    async initIncidentByID(id){
      const fetchedObject = incidentReport.find(item => item.reportID === id);
      if (fetchedObject) {
        this.incdReport = { ...this.incdReport, ...fetchedObject };
      }
    },
    async getReporter(incidentReportID){
      let index = initialReport.findIndex((incd) => incd.reportIDRef === incidentReportID);
      // console.log(index);
      const id = initialReport[index].reportedBY;
      // console.log(id);
      if(id){
      index = adviser.findIndex((adv) => adv.id === id);
      this.reportedBy =  `${(adviser[index].firstName).toUpperCase()} ${(adviser[index].middleName).charAt(0).toUpperCase() + '.'} ${(adviser[index].lastName).toUpperCase()}`;
      return true;
      }else return false;
    },
    

   /* generatePDF() {
      // Sample data should be from database
      pdfMake.createPdf(this.defineIncidentDoc()).download('myDocument.pdf');
    },*/

    displayPDF(){
      pdfMake.createPdf(this.defineIncidentDoc).getBlob((blob) => {
      const url = URL.createObjectURL(blob);

  // Display in an iframe
  const iframe = document.createElement('iframe');
  iframe.style.width = '70%';
  iframe.style.height = '80vh';
  iframe.style.display = 'block'; 
  iframe.style.margin = '0 auto'; 
  iframe.src = url;
  //document.getElementById('incident-display-container').appendChild(iframe);

  // Alternatively, open in a new tab
   window.open(url);
});
    },

  },
};
</script>

<style>
h1 {
  font-family: Arial, sans-serif;
}
button {
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}

</style>