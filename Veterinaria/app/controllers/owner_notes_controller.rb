class OwnerNotesController < ApplicationController
  # GET /owner_notes
  # GET /owner_notes.json
  def index
    @owner_notes = OwnerNote.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @owner_notes }
    end
  end

  # GET /owner_notes/1
  # GET /owner_notes/1.json
  def show
    @owner_note = OwnerNote.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @owner_note }
    end
  end

  # GET /owner_notes/new
  # GET /owner_notes/new.json
  def new
    @owner_note = OwnerNote.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @owner_note }
    end
  end

  # GET /owner_notes/1/edit
  def edit
    @owner_note = OwnerNote.find(params[:id])
  end

  # POST /owner_notes
  # POST /owner_notes.json
  def create
    @owner_note = OwnerNote.new(params[:owner_note])

    respond_to do |format|
      if @owner_note.save
        format.html { redirect_to @owner_note, notice: 'Owner note was successfully created.' }
        format.json { render json: @owner_note, status: :created, location: @owner_note }
      else
        format.html { render action: "new" }
        format.json { render json: @owner_note.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /owner_notes/1
  # PUT /owner_notes/1.json
  def update
    @owner_note = OwnerNote.find(params[:id])

    respond_to do |format|
      if @owner_note.update_attributes(params[:owner_note])
        format.html { redirect_to @owner_note, notice: 'Owner note was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @owner_note.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /owner_notes/1
  # DELETE /owner_notes/1.json
  def destroy
    @owner_note = OwnerNote.find(params[:id])
    @owner_note.destroy

    respond_to do |format|
      format.html { redirect_to owner_notes_url }
      format.json { head :no_content }
    end
  end
end
