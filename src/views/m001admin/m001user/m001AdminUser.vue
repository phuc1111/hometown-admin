<template>
  <div class="home">
    <M001Navbar />
    <div class="home-content">
      <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3 left-menu1">
        <M001LeftMenu />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <!-- <b-table striped hover :items="items"></b-table> -->
          
            <h3>Danh sách user </h3>
            <b-table
              striped
              ref="table"
              responsive
              show-empty
              hover
              :items="items"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <template v-slot:cell(avatar)="data" class="admin_user">
                <img
                  class="user_image"
                  width="90"
                  height="90"
                  v-if="data.item.avatar"
                  v-lazy="data.item.avatar"
                  alt
                />
                <b-avatar
                  class="admin_user--avatar"
                  v-if="!data.item.avatar"
                ></b-avatar>
              </template>
              <template v-slot:cell(name)="data">
               {{data.item.name}}
              </template>
              <template v-slot:cell(email)="data">
               {{data.item.email}}
              </template>
              <template v-slot:cell(address)="data">
               {{data.item.address}}
              </template>
               <template v-slot:cell(phone)="data">
               {{data.item.phone}}
              </template>
              <template v-slot:cell(role)="data">
               {{data.item.role}}
              </template>
              <template v-slot:cell(action)="data">
                <b-icon @click="deleteUser(data.item._id)" icon="x-circle-fill" class="icon-delete"></b-icon>
              </template>
            </b-table>

            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import M001Navbar from "@/components/m001admin/M001Navbar";
import M001LeftMenu from "@/components/m001admin/M001LeftMenu";

import UserDataService from "@/../api/userApi";
import Depart from "@/../DataObject/Department";
export default {
  name: "M001AdminHome",
  components: {
    M001Navbar,
    M001LeftMenu
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      items: [],
      fields: [
        {
          key: "avatar",
          sortable: false
        },
         {
          key: "phone",
          label: "Số điện thoại",
          sortable: false
        },
         {
          key: "role",
          label: "Phân quyền",
          sortable: false
        },
        {
          key: "name",
          label: "Tên nhân viên",
          sortable: true
        },
        {
          key: "email",
          sortable: true
        },
        {
          key: "address",
          label: "Địa chỉ",
          sortable: true
        },
       
        {
          key: "action",
          label: "Action",
          sortable: false
        }
      ]
    };
  },
  methods: {
    toast(content) {
      this.$bvToast.toast(content, {
        title: "Thông báo",
        toaster: "b-toaster-bottom-left",
        solid: true,
        appendToast: true
      });
    },
    myRowClickHandler(record, index) {
      this.$router.push({
        name: "M001AdminUpdateUser",
        params: { id: record.id }
      });
    },
    addUser() {
      this.$router.push({ name: "M001AdminAddUser" });
    },
    update(id) {
      this.$router.push({ name: "M001AdminUpdateUser", params: { id: id } });
    },
    deleteUser(id) {
  
      UserDataService.deleteUser(id)
        .then(() => {
          this.items = this.items.filter(item => {
            return item._id != id;
          });
          this.toast("Xóa user thành công");
        })
        .catch(err => {
          console.log(err.response);
          this.toast(err.response.data.message);
        });
    },
    getAllUser() {
      UserDataService.getAllUser()
        .then(data => {
          console.log(data);
          data.data.forEach(departs => {
            let depart = new Depart(departs);
            this.items.push(depart);
          });
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  },
  mounted() {
    this.getAllUser();
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>
