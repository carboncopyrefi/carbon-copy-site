<script setup lang="ts">

    const { data } = await useFetch(`/drivyx-esg.json`)
    console.log(data)

</script>

<template>

<table class="table table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Section</th>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="q in data">
                    <td>{{ q['category'] }}</td>
                    <td>{{ q['questionText'] }}</td>
                    <td>{{ q['Answer'] }}</td>
                    <td v-if="q['Score'] == 2" class="bg-warning">{{ q['Score'] }}</td>
                    <td v-else-if="q['Score'] == 1" class="bg-error">{{ q['Score'] }}</td>
                    <td v-else>{{ q['Score'] }}</td>
                </tr>
            </tbody>
        </table>
</template>