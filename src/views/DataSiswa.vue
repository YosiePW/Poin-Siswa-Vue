<template>
<div class="container-scroller">
<div class="horizontal-menu">
      <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="nav-top flex-grow-1">
          <div class="container d-flex flex-row h-100 align-items-center">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a class="navbar-brand brand-logo" href="index.html"><img src="assets/img/logo.svg"></a>
              <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/img/logo.svg"></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
              <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item nav-profile dropdown">
                  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                    Hi, Admin
                  </a>
                  <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a @click="logout" class="dropdown-item">
                      <i class="mdi mdi-logout text-primary"></i>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                <span class="mdi mdi-menu"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav class="bottom-navbar">
        <div class="container">
          <ul class="nav page-navigation">
            <li class="nav-item">
              <a class="nav-link" href="/">
                <i class="mdi mdi-view-dashboard-outline menu-icon"></i>
                <span class="menu-title">Beranda</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/petugas">
                <i class="mdi mdi-account-settings menu-icon"></i>
                <span class="menu-title">Petugas Tatib</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/datasiswa">
                <i class="mdi mdi-file-document-box-outline menu-icon"></i>
                <span class="menu-title">Data Siswa</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/datapelanggaran" class="nav-link">
                <i class="mdi mdi-codepen menu-icon"></i>
                <span class="menu-title">Pelanggaran</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/inputpelanggaran" class="nav-link">
                <i class="mdi mdi-puzzle-outline menu-icon"></i>
                <span class="menu-title">Input Pelanggaran</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/poinsiswa" class="nav-link">
                <i class="mdi mdi-image-filter menu-icon"></i>
                <span class="menu-title">Poin Siswa</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

      <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title float-left"><b>Data Siswa</b></p>
                  <p class="card-description float-right">
                    <a href="#" class="btn btn-sm btn-success btn-icon-text" data-toggle="modal" data-target="#modalSiswa">
                      <i class="mdi mdi-plus btn-icon-prepend"></i>
                      Tambah
                    </a>
                  </p>
                  <div class="table-responsive">

                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>NIS</th>
                          <th>Nama Siswa</th>
                          <th>Kelas</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1234/12/23/20.09</td>
                          <td>Herman Beck Supriadi</td>
                          <td>X RPL 2</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-info btn-icon-text" data-toggle="modal" data-target="#modalSiswa">
                              <i class="mdi mdi-pencil btn-icon-prepend"></i>
                              Ubah
                            </a>
                            <a href="#" class="btn btn-sm btn-danger btn-icon-text">
                              <i class="mdi mdi-delete btn-icon-prepend"></i>
                              Hapus
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>1234/12/23/20.09</td>
                          <td>John Abraham Sutanto</td>
                          <td>XII TKJ 4</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-info btn-icon-text" data-toggle="modal" data-target="#modalSiswa">
                              <i class="mdi mdi-pencil btn-icon-prepend"></i>
                              Ubah
                            </a>
                            <a href="#" class="btn btn-sm btn-danger btn-icon-text">
                              <i class="mdi mdi-delete btn-icon-prepend"></i>
                              Hapus
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="modalSiswa" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Form Siswa</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="nis" class="col-form-label">NIS</label>
                    <input type="text" name="nis" class="form-control" id="nis" placeholder="Nomor Induk Siswa">
                  </div>
                  <div class="form-group">
                    <label for="nama" class="col-form-label">Nama Siswa</label>
                    <input type="text" name="nama" class="form-control" id="nama" placeholder="Nama Lengkap">
                  </div>
                  <div class="form-group">
                    <label for="kelas" class="col-form-label">Kelas</label>
                    <select class="form-control" name="kelas" id="kelas">
                      <option value="1" checked>X RPL 1</option>
                      <option value="2">X RPL 2</option>
                      <option value="3">X RPL 3</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <button type="button" class="btn btn-md btn-success">Simpan</button>
                    <button type="button" class="btn btn-md btn-light" data-dismiss="modal">Batal</button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                
              </div>
            </div>
          </div>
        </div>

        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->

        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    </div>
</template>

<script>

export default {
  name: 'datasiswa',
  methods:{
      logout:function(){
          let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
          let form = new FormData();
          this.axios.post('/logout', form, conf).then(response => {
            if (response.data.logged === false || response.data.status === 0) {
                this.$store.commit('logout')
                localStorage.removeItem("Authorization")
                this.$router.push({name:'login'})
            }
          }).catch(error => {

        });
      },
  }
}
</script>
