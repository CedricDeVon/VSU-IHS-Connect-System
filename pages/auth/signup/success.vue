<script setup lang="ts">

const backToLogin = () => {
    return navigateTo('/auth/login', { replace: true })
}

</script>

<template>
    <div class="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 flex  opacity-10">
            <img src="@/assets/images/vsu-main-the-search-for-truth-statue.png" alt="Background Image"
                class="w-full h-full object-contain" />
        </div>

        <!-- Message Container -->
        <div class="relative z-10 text-center px-4">
            <h1 class="text-4xl font-extrabold text-green-800 mb-4">Registration Successful!</h1>
            <p class="text-green-800 text-xl font-medium mb-2">
                Your profile has been submitted and is pending approval from the guidance office.
            </p>
            <p class="text-green-800 text-lg">
                You will receive an email notification once your account has been approved.
                <br />
                Please allow up to 24-48 hours for the approval process. Thank you!
            </p>
            <button
            @click="backToLogin"
            class="w-[16rem] py-3 mt-20 bg-[#6B8E76] text-white rounded-lg text-sm uppercase tracking-wider
                   transform transition-all duration-300
                   hover:bg-[#5a7862] hover:scale-[1.02] hover:shadow-lg
                   active:scale-95"
          >
            Back To Log-in
          </button>
        </div>
    </div>
</template>
