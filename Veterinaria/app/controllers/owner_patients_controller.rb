class OwnerPatientsController < ApplicationController
  # GET /owner_patients
  # GET /owner_patients.json
  def index
    @owner_patients = OwnerPatient.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @owner_patients }
    end
  end

  # GET /owner_patients/1
  # GET /owner_patients/1.json
  def show
    @owner_patient = OwnerPatient.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @owner_patient }
    end
  end

  # GET /owner_patients/new
  # GET /owner_patients/new.json
  def new
    @owner_patient = OwnerPatient.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @owner_patient }
    end
  end

  # GET /owner_patients/1/edit
  def edit
    @owner_patient = OwnerPatient.find(params[:id])
  end

  # POST /owner_patients
  # POST /owner_patients.json
  def create
    @owner_patient = OwnerPatient.new(params[:owner_patient])

    respond_to do |format|
      if @owner_patient.save
        format.html { redirect_to @owner_patient, notice: 'Owner patient was successfully created.' }
        format.json { render json: @owner_patient, status: :created, location: @owner_patient }
      else
        format.html { render action: "new" }
        format.json { render json: @owner_patient.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /owner_patients/1
  # PUT /owner_patients/1.json
  def update
    @owner_patient = OwnerPatient.find(params[:id])

    respond_to do |format|
      if @owner_patient.update_attributes(params[:owner_patient])
        format.html { redirect_to @owner_patient, notice: 'Owner patient was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @owner_patient.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /owner_patients/1
  # DELETE /owner_patients/1.json
  def destroy
    @owner_patient = OwnerPatient.find(params[:id])
    @owner_patient.destroy

    respond_to do |format|
      format.html { redirect_to owner_patients_url }
      format.json { head :no_content }
    end
  end
end
