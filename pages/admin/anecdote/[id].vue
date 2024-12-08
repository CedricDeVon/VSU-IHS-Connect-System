<template>
  <div class="flex h-screen bg-[#FFFEF1]">
    <AdminSidebar />
    <div class="flex-1 overflow-hidden">
      <AdminHeader />
      <div class="p-8 pt-0 overflow-y-auto h-[calc(100vh-64px)]">
        <!-- Page Title -->
        <div class="mb-6">
          <h1 class="text-2xl font-bold text-[#265630]">Anecdotal Report Details</h1>
          <p class="text-sm text-[#265630]">Managing anecdotal report and related actions</p>
        </div>

        <div class="flex gap-6">
          <!-- Left side: PDF Viewer -->
          <div class="flex-1 bg-white rounded-lg shadow-md min-h-[80vh] overflow-hidden">
            <!-- PDF Viewer Header -->
            <div class="bg-gray-50 px-6 py-3 border-b border-gray-200 flex items-center justify-between">
              <h2 class="text-lg font-semibold text-gray-800">Document Preview</h2>
            </div>
            <!-- PDF Viewer Content -->
            <iframe id="pdf-viewer" class="w-full h-[calc(100%-48px)] border-none"></iframe>
          </div>

          <!-- Right side: Actions Panel -->
          <div class="w-96 space-y-6">
            <!-- Update Report -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="p-4 bg-gray-50 border-b border-gray-200">
                <h2 class="text-sm font-semibold text-gray-900">Update Report</h2>
              </div>

              <div class="p-4 space-y-3">
                <button @click="openUpdateForm"
                  class="w-full px-4 py-3 rounded-lg bg-white border-2 border-[#265630] text-[#265630] hover:bg-[#728B78] hover:text-white hover:border-[#728B78] transition-colors duration-200 flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Update Report Details</span>
                </button>
              </div>
            </div>
            <!-- Document Actions -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="p-4 bg-gray-50 border-b border-gray-200">
                <h2 class="text-sm font-semibold text-gray-900">Document Actions</h2>
              </div>

              <div class="grid grid-cols-2 gap-3 p-4">
                <button @click="downloadPDF"
                  class="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span class="mt-2 text-sm font-medium text-gray-600">Download</span>
                </button>

                <button @click="printDocument"
                  class="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  <span class="mt-2 text-sm font-medium text-gray-600">Print</span>
                </button>
              </div>
            </div>

            <!-- Report Timeline -->
            <div class="bg-white rounded-lg shadow-md overflow-hidden mt-6">
              <div class="p-4 bg-gray-50 border-b border-gray-200">
                <h2 class="text-sm font-semibold text-gray-900">Report Timeline</h2>
              </div>

              <div class="p-4 space-y-8">
                <div v-for="(report, index) in sortedReports" :key="report.id" class="relative">
                  <!-- Timeline connector -->
                  <div v-if="index !== sortedReports.length - 1"
                    class="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>

                  <!-- Timeline item -->
                  <div class="relative flex items-start space-x-4">
                    <!-- Date circle -->
                    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-[#265630] text-white">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <!-- Content -->
                    <div class="flex-1">
                      <div class="flex items-center justify-between">
                        <h3 class="text-sm font-medium text-gray-900">
                          {{ report.data.purpose }}
                        </h3>
                        <time class="text-xs text-gray-500">{{ report.data.datePrepared }}</time>
                      </div>
                      <div class="mt-2 text-sm text-gray-700 space-y-2">
                        <p><span class="font-medium">Incident Date:</span> {{ report.data.dateOfIncident }}</p>
                        <p><span class="font-medium">Place:</span> {{ report.data.placeOfIncident }}</p>
                        <p><span class="font-medium">Witnesses:</span> {{ report.data.witnesses.join(', ') }}</p>
                        <p class="mt-2">{{ report.data.details }}</p>
                        <p class="mt-2 text-gray-600 italic">{{ report.data.remarks }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <UpdateAnecdotalModal v-if="showUpdateModal" :report="selectedReport" @close="closeUpdateModal"
      @update="handleUpdate" />
  </div>
</template>

<script>
definePageMeta({
  middleware: ['authenticate-and-authorize-admin']
});

import pdfMake from 'pdfmake/build/pdfmake';
import { headerImage } from '~/assets/images/sample-header';
import { footer } from '~/assets/images/footer';
import { report, updateReport, initializeReports } from '~/data/report';
import AdminSidebar from '~/components/Blocks/AdminSidebar.vue';
import AdminHeader from '~/components/Blocks/AdminHeader.vue';
import UpdateAnecdotalModal from '~/components/Modals/UpdateAnecdotalModal.vue'
import { formatDate } from '@vueuse/core';
import { useAdminViewStore } from '~/stores/views/adminViewStore';
import { defineAnecdotalDoc } from '~/utils/documentDefinitions';

export default {
  components: {
    AdminSidebar,
    AdminHeader,
    UpdateAnecdotalModal,
  },

  data() {
    return {
      anecReport: null,
      studentData: null,
      showUpdateModal: false,
      selectedReport: null,
      adminViewStore: useAdminViewStore(),
      sortedReports: []
    };
  },

  async mounted() {
    await this.adminViewStore.updateAnecdote(useRoute().params.id);
    await this.adminViewStore.updateSidebar();
    initializeReports(); // Initialize from localStorage
    await this.initData();
    this.displayPDF();
  },

  computed: {
    defineAnecdotalDoc() {
      if (!this.anecReport || !this.studentData) return null;

      const associatedReports = this.adminViewStore.anecdoteReports.filter(r => this.anecReport.data.reportIds.includes(r.id));

      // Sort reports by date prepared
      associatedReports.sort((a, b) => new Date(a.data.datePrepared) - new Date(b.data.datePrepared));

      const content = [
        { text: 'ANECDOTAL REPORT', style: 'header', margin: [0, 0, 0, 0] },
        {
          table: {
            widths: ['30%', '70%'],
            headerRows: 0,
            body: [
              [
                { text: 'Student Name:', style: 'label', border: [false, false, false, false] },
                { text: this.adminViewStore.getFullName(this.studentData), style: 'content', border: [false, false, false, false] }
              ],
              [
                { text: 'Student ID:', style: 'label', border: [false, false, false, false] },
                { text: this.studentData.id, style: 'content', border: [false, false, false, false] }
              ],
              [
                { text: 'Academic Year:', style: 'label', border: [false, false, false, false] },
                { text: this.anecReport.data.schoolYear, style: 'content', border: [false, false, false, false] }
              ]
            ]
          }
        }
      ];

      associatedReports.forEach((rep) => {
        // Format the date using the Date object
        const preparedDate = new Date(rep.data.datePrepared);
        const formattedDate = preparedDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        const incidentDate = new Date(rep.data.dateOfIncident);
        const formattedIncidentDate = incidentDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        content.push(
          {
            text: formattedDate,
            style: 'subheader',
            margin: [0, 20, 0, 10],
            color: '#1f2937'
          },
          {
            table: {
              widths: ['30%', '70%'],
              headerRows: 0,
              body: [
                [
                  { text: 'Date of Incident:', style: 'label', border: [false, false, false, false] },
                  { text: formattedIncidentDate, style: 'content', border: [false, false, false, false] }
                ],
                [
                  { text: 'Purpose:', style: 'label', border: [false, false, false, false] },
                  { text: rep.data.purpose, style: 'content', border: [false, false, false, false] }
                ],
                [
                  { text: 'Witnesses:', style: 'label', border: [false, false, false, false] },
                  { text: rep.data.witnesses.join(', '), style: 'content', border: [false, false, false, false] }
                ],
                [
                  { text: 'Place of Incident:', style: 'label', border: [false, false, false, false] },
                  { text: rep.data.placeOfIncident, style: 'content', border: [false, false, false, false] }
                ],
                [
                  { text: 'Things Involved:', style: 'label', border: [false, false, false, false] },
                  { text: rep.data.thingsInvolved, style: 'content', border: [false, false, false, false] }
                ],
              ]
            }
          },

          { text: 'Details:', style: 'label', margin: [0, 15, 0, 5] },
          { text: rep.data.details, style: 'content', margin: [30, 0, 30, 15] },

          { text: rep.data.isReportedByGuidance ? 'Remarks from the Guidance Office:' : 'Adviser\'s Remarks:', style: 'label', margin: [0, 15, 0, 5] },
          { text: rep.data.remarks, style: 'content', margin: [30, 0, 30, 15] },

          {
            table: {
              widths: ['30%', '70%'],
              headerRows: 0,
              body: [
                [
                  { text: 'Prepared By:', style: 'label', border: [false, false, false, false] },
                  { text: rep.data.isReportedByGuidance ? 'Guidance' : this.anecReport.data.preparedBy, style: 'content', border: [false, false, false, false] }
                ]
              ]
            }
          }
        );
      });

      return {
        pageMargins: [72, 120, 72, 90],
        header: {
          image: headerImage,
          width: 600,
          height: 100,
          alignment: 'center',
          margin: [0, 10, 0, 0],
        },
        content: content,
        styles: {
          header: {
            fontSize: 20,
            bold: true,
            alignment: 'center',
          },
          subheader: {
            fontSize: 15,
            bold: true,
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
        footer: {
          image: footer,
          width: 480,
          alignment: 'center',
          margin: [0, 10, 0, 0]
        }
      };
    }
  },

  methods: {
    async initData() {
      await this.adminViewStore.updateAnecdote(useRoute().params.id);

      this.studentData = this.adminViewStore.anecdoteStudent;
      if (!this.studentData) return;

      this.anecReport = this.adminViewStore.anecdoteAnecdotalReport;
      this.sortedReports = this.adminViewStore.anecdoteReports
        .sort((a, b) => new Date(a.data.datePrepared) - new Date(b.data.datePrepared));
    },

    displayPDF() {
      if (!this.anecReport || !this.studentData) {
        console.error('Required data not available');
        return;
      }

      const docDefinition = defineAnecdotalDoc({
        studentData: this.studentData,
        anecdotalData: this.anecReport,
        associatedReports: this.adminViewStore.anecdoteReports
      });

      pdfMake.createPdf(docDefinition).getBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const viewer = document.getElementById('pdf-viewer');
        if (viewer) {
          viewer.src = url;
        }
      });
    },

    formatDate(date) {
      return formatDate(date, 'MMMM DD, YYYY');
    },

    openUpdateForm() {
      // Create a new report object with required fields
      this.selectedReport = {
        date: '',
        purpose: '',
        witnesses: [],
        placeOfIncident: '',
        thingsInvolved: '',
        details: '',
        remarks: '',
        isReportedByGuidance: true
      };
      this.showUpdateModal = true;
      // console.log('Modal should open', this.showUpdateModal); // Debug log
    },

    closeUpdateModal() {
      this.showUpdateModal = false;
      this.selectedReport = null;
    },

    async handleUpdate(updatedData) {
      try {
        const now = new Date();
        const datePrepared = now.toISOString().split('T')[0];
        const reportId = `REP-${datePrepared.replace(/-/g, '')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;

        const newReport = {
          dateOfIncident: updatedData.dateOfIncident,
          datePrepared: datePrepared,
          purpose: updatedData.purpose,
          witnesses: updatedData.witnesses,
          placeOfIncident: updatedData.placeOfIncident,
          thingsInvolved: updatedData.thingsInvolved,
          details: updatedData.details,
          remarks: updatedData.remarks,
          isReportedByGuidance: true,
        };

        const result = await $fetch('/api/anecdote/update', {
          method: 'POST', body: {
            id: reportId, data: newReport, anecdote: this.adminViewStore.anecdoteAnecdotalReport
          }
        });
        await this.adminViewStore.updateAnecdote(this.adminViewStore.anecdoteStudent.id);
        this.anecReport = this.adminViewStore.anecdoteAnecdotalReport;
        
        this.displayPDF();
        this.showUpdateModal = false;

        alert('Report added successfully');

      } catch (error) {
        console.error('Error updating report:', error);
        alert('Failed to update report');
      }
    },

    downloadPDF() {
      const fileName = `${this.anecReport.id}.pdf`;
      pdfMake.createPdf(defineAnecdotalDoc({
        studentData: this.studentData,
        anecdotalData: this.anecReport,
        associatedReports: this.adminViewStore.anecdoteReports
      })).download(fileName);
    },

    printDocument() {
      pdfMake.createPdf(defineAnecdotalDoc({
        studentData: this.studentData,
        anecdotalData: this.anecReport,
        associatedReports: this.adminViewStore.anecdoteReports
      })).print({
        silent: false,
        printBackground: true
      });
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  },
};
</script>

<style scoped>

.body {
  background: #FFFEF1;
}

#incident-display-container {
  min-height: 80vh;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

iframe {
  border-radius: 0.5rem;
}

.timeline-connector {
  position: absolute;
  left: 1rem;
  top: 2rem;
  bottom: 0;
  width: 2px;
  background-color: #e5e7eb;
}
</style>