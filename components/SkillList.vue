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
  <ul :class="$style.list" v-for="skill in skills">
    <SkillListItem
      :main="skill.main"
      :sub-items="skill.subItems"
    ></SkillListItem>
  </ul>
</template>

<style lang="scss" module>
  .list {
    margin-bottom: 8px;
    margin-left: 40px;
    padding-left: 0px;
    padding-right: 64px;
    list-style: none;
  }
</style>
