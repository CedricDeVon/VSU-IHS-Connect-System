<!--TAKE NOTE that case conference documents cannot be edited once created from its incident page that is why wala ko nag add edit buttons because this page is solely for viewing resolved conferences. 

AND an incident cannot have more than one on-going conference that is why sa incident/[id] page na laman ko mag put ug edit/save case conference details once created na ang case conference document-->
<template>
    <div class="flex h-screen bg-[#FFFEF1]">
        <AdminSidebar />
        <div class="flex-1 overflow-hidden">
            <AdminHeader />
            <div class="p-8 pt-0 overflow-y-auto h-[calc(100vh-64px)]">
                <!-- Breadcrumb navigation -->
                <div class="mb-4">
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li>
                                <button @click="navigateBackToIncident" class="text-[#265630] hover:text-gray-700">
                                    Incident Document
                                </button>
                            </li>
                            <li>/</li>
                            <li class="text-[#265630]">
                                Case Conference Document
                            </li>
                        </ol>
                    </nav>
                </div>

                <!-- Loading state -->
                <div v-if="loading" class="flex justify-center items-center h-[60vh]">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>

                <!-- Error state -->
                <div v-else-if="error" class="text-center text-red-600 mt-8">
                    {{ error }}
                </div>

                <!-- Conference document content -->
                <div v-else class="bg-[white] rounded-lg shadow-md p-6">
                    <div v-if="conferenceData" class="space-y-6">
                        <!-- Header Info -->
                        <div class="flex justify-between items-start border-b pb-4">
                            <div class="space-y-1">
                                <h2 class="text-xl font-semibold text-[#265630]">Case Conference Document</h2>
                                <p class="text-sm text-[#265630]">
                                    Conference ID: {{ conferenceData.id }}
                                </p>
                            </div>
                            <div class="flex space-x-3">
                                <button @click="makeComplete"
                                    class="px-4 py-2 text-sm bg-[#265630] text-white rounded-md hover:bg-[#728B78]">
                                    Mark As Complete
                                </button>
                                <button @click="downloadPDF"
                                    class="px-4 py-2 text-sm bg-[#265630] text-white rounded-md hover:bg-[#728B78]">
                                    Download PDF
                                </button>
                                <button @click="printDocument"
                                    class="px-4 py-2 text-sm border border-[#265630] text-[#265630] rounded-md hover:bg-[#728B78] hover:text-white hover:border-[#728B78]">
                                    Print
                                </button>
                            </div>
                        </div>

                        <!-- Conference Details -->
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-sm font-medium text-gray-500">Student Information</h3>
                                <p class="mt-1 text-sm text-gray-900">{{ conferenceData.data.studentName }}</p>
                                <p class="text-sm text-gray-600">{{ conferenceData.data.gradeAndSection }}</p>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium text-gray-500">Conference Schedule</h3>
                                <p class="mt-1 text-sm text-gray-900">
                                    {{ formatDate(conferenceData.data.conferenceDate) }} - {{ conferenceData.data.time }}
                                </p>
                            </div>
                        </div>

                        <!-- PDF Preview -->
                        <div id="pdf-container" class="mt-6 border rounded-lg min-h-[60vh]">
                            <iframe id="pdf-viewer" class="w-full h-[70vh] border-none"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
  middleware: ['authenticate-and-authorize-admin']
});

import { useAdminViewStore } from '~/stores/views/adminViewStore'
const adminViewStore = useAdminViewStore();
await adminViewStore.updateCaseConference(useRoute().params.conferenceId);
await adminViewStore.updateSidebar();

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import pdfMake from 'pdfmake/build/pdfmake'
import AdminHeader from '~/components/Blocks/AdminHeader.vue'
import AdminSidebar from '~/components/Blocks/AdminSidebar.vue'
import { footer } from '~/assets/images/footer'
import { headerImage } from '~/assets/images/sample-header'

const route = useRoute()
const loading = ref(true)
const error = ref(null)
const conferenceData = ref(null);
const incidentId = ref('');
const conferenceId = ref('');

const makeComplete = async () => {
    await $fetch('/api/caseConference/update', {
        method: 'POST',
        body: {
            id: adminViewStore.caseConferenceCaseConferenceReport.id,
            data: {
                status: 'Completed'
            }
        }
    })
    alert('Case Conference Made Complete')
    const data = adminViewStore.caseConferenceCaseConferenceReport;
    conferenceData.value = data
    loading.value = false
    displayPDF()
}

const navigateBackToIncident = () => {
    // console.log(adminViewStore.caseConferenceIncidentReport.data.incidentId)
    return navigateTo(`/admin/incident/${adminViewStore.caseConferenceIncidentReport.id}`, { replace: true })
}

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

const defineConferenceDoc = (data) => ({
    pageSize: 'A4',
    pageMargins: [72, 110, 72, 72],
    header: {
          image: headerImage,
          width: 600,
          height: 100,
          alignment: 'center',
          margin: [0, 10, 0, 0],
        },
    content: [
        { text: 'CASE CONFERENCE FORM', style: 'header' },

        // Student Info
        {
            columns: [
                {
                    text: 'Student\'s Name: ',
                    style: 'label',
                    width: 100
                },
                {
                    text: conferenceData.value.data.studentName,
                    style: 'content'
                },
                {
                    text: [
                        { text: 'Grade & Section: ', style: 'label' },
                        { text: conferenceData.value.data.gradeAndSection, style: 'content' }
                    ],
                    alignment: 'right'
                }
            ]
        },

        // Main Content
        { text: '\nCircumstance:', style: 'label' },
        { text: adminViewStore.caseConferenceCaseConferenceReport.data.circumstance, style: 'content', margin: [10, 0, 0, 20] },

        { text: 'Discussions:', style: 'label' },
        { text: adminViewStore.caseConferenceCaseConferenceReport.data.discussions, style: 'content', margin: [10, 0, 0, 20] },

        { text: 'Agreement:', style: 'label' },
        { text: adminViewStore.caseConferenceCaseConferenceReport.data.agreement, style: 'content', margin: [10, 0, 0, 20] },

        { text: 'Remarks:', style: 'label' },
        { text: adminViewStore.caseConferenceCaseConferenceReport.data.remarks, style: 'content', margin: [10, 0, 0, 20] },

        // Signatures
        {
            components: {
                AdminHeader,
                AdminSidebar
            },
            columns: [
                {
                    stack: [
                        { text: '\n\n_______________________', style: 'signature' },
                        { text: 'Student\'s Signature', style: 'signatureLabel' }
                    ],
                    width: '*'
                },
                {
                    stack: [
                        { text: '\n\n_______________________', style: 'signature' },
                        { text: 'Parent\'s Signature', style: 'signatureLabel' }
                    ],
                    width: '*'
                }
            ],
            columnGap: 20
        }
    ],
    styles: {
        header1: {
            fontSize: 14,
            bold: true,
            alignment: 'center',
            margin: [0, 0, 0, 5]
        },
        header2: {
            fontSize: 12,
            bold: true,
            alignment: 'center',
            margin: [0, 0, 0, 5]
        },
        header3: {
            fontSize: 11,
            alignment: 'center',
            margin: [0, 0, 0, 20]
        },
        header: {
            fontSize: 14,
            bold: true,
            alignment: 'center',
            margin: [0, 0, 0, 30]
        },
        label: {
            fontSize: 11,
            bold: true
        },
        content: {
            fontSize: 11
        },
        signature: {
            alignment: 'center'
        },
        signatureLabel: {
            fontSize: 10,
            alignment: 'center'
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
})

const displayPDF = () => {
    if (!conferenceData.value) return
    const docDefinition = defineCaseConferenceDoc(conferenceData.value)
    pdfMake.createPdf(docDefinition).getBlob((blob) => {
        const url = URL.createObjectURL(blob)
        const viewer = document.getElementById('pdf-viewer')
        if (viewer) {
            viewer.src = url
        }
    })
}

const downloadPDF = () => {
    if (!conferenceData.value) return
    const docDefinition = defineConferenceDoc(conferenceData.value)
    pdfMake.createPdf(docDefinition).download(`${conferenceData.value.id}.pdf`)
}

const printDocument = () => {
    if (!conferenceData.value) return
    const docDefinition = defineCaseConferenceDoc(conferenceData.value)
    pdfMake.createPdf(docDefinition).print()
}

onBeforeMount(async () => {
    try {
        loading.value = true
        
        await adminViewStore.updateCaseConference(useRoute().params.conferenceId);
        await adminViewStore.updateSidebar();
        const data = adminViewStore.caseConferenceCaseConferenceReport;
        if (!data) {
            throw new Error('Conference not found')
        }

        // Update the adminViewStore.caseConferenceIncidentReport.data.incidentId if needed
        conferenceData.value = data
        loading.value = false
        displayPDF()

    } catch (err) {
        error.value = err.message || 'Failed to load conference data'
        loading.value = false
    }
})
</script>