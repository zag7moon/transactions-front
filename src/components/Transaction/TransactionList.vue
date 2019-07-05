<template>
  <div class="transaction-list-container">
    <el-table :data="transactions" border style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="created_at" label="Дата"></el-table-column>
      <el-table-column prop="issuer.first_name" label="Кто провел"></el-table-column>
      <el-table-column prop="transaction_type.name" label="Тип транзакции"></el-table-column>
      <el-table-column prop="partner.partner_type.name" label="Тип контрагента"></el-table-column>
      <el-table-column prop="partner.name" label="Контрагент"></el-table-column>
      <el-table-column prop="description" label="Статья расхода/прихода"></el-table-column>
      <el-table-column prop="purse.name" label="Кошелек"></el-table-column>
      <el-table-column prop="amount" label="Сумма"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { FETCH_TRANSACTIONS } from '../../vuex/types'

export default {
  name: 'transaction-list',
  created () {
    this.fetchTransactions()
  },
  computed: {
    transactions () { return this.$store.state.transactions.list }
  },
  methods: {
    fetchTransactions () {
      this.$store.dispatch(FETCH_TRANSACTIONS, {})
    }
  }
}
</script>

<style lang="scss">
  .transaction-list-container {
    width: 80%;
    margin: 0 auto;
    padding: 20px
  }
</style>


