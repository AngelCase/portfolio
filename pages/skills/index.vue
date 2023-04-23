<script setup>
  const skills = [
    { main: 'C / C++', subItems: ['DxLib', 'OpenSiv3D'] },
    { main: 'JavaScript / TypeScript', subItems: ['Vue.js', 'Nuxt.js'] },
    { main: 'Java' },
    { main: 'Go' },
    { main: 'Python' },
    {
      main: 'AWS',
      subItems: [
        'Computing (ECS, Fargate, EC2, Lambda)',
        'Developer Tools (CodeBuild, CloudFormation, CDK)',
        'Networking (CloudFront, Route 53, VPC, Transit Gateway, ELB)',
        'Security (IAM, WAF)',
        'Strage (S3)',
        'Management (CloudWatch)'
      ]
    }
  ]
</script>

<template>
  <div>
    <PageHeading text="SKILLS"></PageHeading>
    <TextList :class="$style.list" :contents="skills"></TextList>
  </div>
</template>

<style lang="scss" module>
  .list {
    padding-left: 40px;
  }
</style>
